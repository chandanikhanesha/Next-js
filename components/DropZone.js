import React, { useState, useEffect } from "react";
import Image from "next/image";
import FilePreview from "./FilePreview";
import styles from "../styles/DropZone.module.css";
import Button from "@mui/material/Button";
import CompressIcon from "@mui/icons-material/Compress";
import Router from "next/router";
import { useRouter } from "next/router";
import imageCompression from "browser-image-compression";
const DropZone = ({ data, dispatch }) => {
  const [compressFiles, setcompressFiles] = useState([]);
  useEffect(() => {
    handleImageUpload();
  }, [data]);

  // onDragEnter sets inDropZone to true
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  // onDragLeave sets inDropZone to false
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  // onDragOver sets inDropZone to true
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // set dropEffect to copy i.e copy of the source item
    e.dataTransfer.dropEffect = "copy";
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  // onDrop sets inDropZone to false and adds files to fileList
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // get files from event on the dataTransfer object as an array
    let files = [...e.dataTransfer.files];

    // ensure a file or files are dropped
    if (files && files.length > 0) {
      // loop over existing files
      const existingFiles = data.fileList.map((f) => f.name);
      // check if file already exists, if so, don't add to fileList
      // this is to prevent duplicates
      files = files.filter((f) => !existingFiles.includes(f.name));

      // dispatch action to add droped file or files to fileList
      dispatch({ type: "ADD_FILE_TO_LIST", files });
      // reset inDropZone to false
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    }
  };

  // handle file selection via input element
  const handleFileSelect = (e) => {
    // get files from event on the input element as an array
    let files = [...e.target.files];

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f) => f.name);

      files = files.filter((f) => !existingFiles.includes(f.name));

      // dispatch action to add selected file or files to fileList
      dispatch({ type: "ADD_FILE_TO_LIST", files });
    }
  };
  const handleImageUpload = async (files) => {
    await data.fileList.map((files) => {
      const imageFile = files;
      console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
      console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

      const options = {
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      imageCompression(imageFile, options)
        .then(function (compressedFile) {
          console.log(compressedFile, "compressedFile");
          setcompressFiles(...compressFiles, compressedFile);
        })
        .catch(function (error) {
          console.log(error.message); // output: I just want to stop
        });
    });
  };
  // to handle file uploads
  const uploadFiles = async () => {
    let sendOrignal = [];
    let sendCompress = [];
    console.log(compressFiles, "compressFiles");
    await Promise.all([
      data.fileList.map(async (f) => {
        sendOrignal.push({
          imgName: f.name,
          size: f.size,
        });
      }),

      compressFiles.map((fp) => {
        sendCompress.push({
          name: fp.name,
          size: fp.size,
          type: fp.type,
        });
      }),
    ]);
    setTimeout(() => {
      console.log(sendCompress, "sendCompress", sendOrignal);

      const { pathname } = Router;
      if (pathname == "/") {
        router.push(
          {
            pathname: "/success",
            query: {
              orignalData: JSON.stringify(sendOrignal),
              compressData: JSON.stringify(sendCompress),
            },
          },
          "/success",
          { shallow: true }
        );
      }
    }, 1500);
  };

  const router = useRouter();
  return (
    <>
      <div
        className={styles.dropzone}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      >
        <p className={styles.headerText}>Image Compressor </p>
        <p className={styles.headerNote}>
          Select up to 20 JPG or JPEG images from you device. Or drag files to
          the drop area. Wait for the compression to finish.
        </p>
        <Image src="/upload.svg" alt="upload" height={50} width={50} />
        <div>
          <p className={styles.btnLineText}> Drag Your</p>
          <div className={styles.btnjpg}>.jpg</div>
          <div className={styles.btnjpeg}>.JPEG</div>

          <div className={styles.btnpng}>.png</div>
          <p className={styles.btnLineText}>File Here</p>
        </div>
        <input
          id="fileSelect"
          type="file"
          multiple
          className={styles.files}
          onChange={(e) => handleFileSelect(e)}
        />
        <label htmlFor="fileSelect">You can select multiple Files</label>
      </div>
      {/* Pass the selectect or dropped files as props */}
      <FilePreview fileData={data} />
      {/* Only show upload button after selecting atleast 1 file */}
      {data.fileList.length > 0 && (
        <Button
          onClick={uploadFiles}
          variant="contained"
          endIcon={<CompressIcon />}
        >
          Compress Image
        </Button>
      )}
    </>
  );
};

export default DropZone;
