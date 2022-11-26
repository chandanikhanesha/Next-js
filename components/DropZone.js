import React, { useState } from "react";
import Image from "next/image";
import FilePreview from "./FilePreview";
import Loader from "./loader";
import styles from "../styles/DropZone.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Router from "next/router";
import { useRouter } from "next/router";
import imageCompression from "browser-image-compression";
import gtag_report_conversion from "../lib/trackings";

let sendOrignal = [];
let sendCompress = [];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DropZone = ({ data, dispatch }) => {
  const [isLoad, setisLoad] = useState();
  const [errormsg, seterror] = useState("");
  const [open, setopen] = useState(false);
  const [snackMsg, setsnackMsg] = useState("");

  const [vertical, setvertical] = useState("top");
  const [horizontal, sethorizontal] = useState("center");

  const handleClose = () => {
    setopen(false);
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    gtag_report_conversion();
    // gtag_report_conversion();
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    gtag_report_conversion();
    // gtag_report_conversion();

    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    gtag_report_conversion();
    // gtag_report_conversion();

    e.dataTransfer.dropEffect = "copy";
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    gtag_report_conversion();
    // gtag_report_conversion();

    let files = [...e.dataTransfer.files];

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f) => f.name);

      files = files.filter(
        (f) => !existingFiles.includes(f.name) && f.type.match("image.*")
      );
      // && ( f.type==="image/jpeg"|| f.type==="image/jpg"||f.type==="image/png")

      dispatch({ type: "ADD_FILE_TO_LIST", files });

      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    }
  };

  const handleFileSelect = (e) => {
    gtag_report_conversion();
    // gtag_report_conversion();

    let files = [...e.target.files];
    // console.log("files", files);
    if (files && files.length > 0 && files.length <= 25) {
      const existingFiles = data.fileList.map((f) => f.name);
      // console.log(files, "existingFiles");

      files.map((f) => {
        if (!f.type.match("image.*")) {
          setsnackMsg("Uploaded file is not a image type!");
          setopen(true);
        }
      });

      files = files.filter(
        (f) => !existingFiles.includes(f.name) && f.type.match("image.*")
      );

      dispatch({ type: "ADD_FILE_TO_LIST", files });
    }
    if (files.length >= 25) {
      setsnackMsg("Max upload of the image is 25");
      setopen(true);
    }
  };

  // to handle file uploads
  const uploadFiles = async () => {
    console.log(data.fileList, "data.fileLists");
    sendCompress = [];
    let show = true;
    await data.fileList.map(async (f, index) => {
      const imageFile = f;
      const options = {
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        initialQuality: 0.4,
      };
      imageCompression(imageFile, options)
        .then(function (compressedFile, a) {
          const filePreview = URL.createObjectURL(compressedFile);
          sendCompress.push({
            id: index,
            name: filePreview,
            size: compressedFile.size,
            type: compressedFile.type,
            orignalName: compressedFile.name,
          });

          if (sendCompress.length >= data.fileList.length) {
            setisLoad(false);
          }
        })
        .catch(function (error) {
          setisLoad(undefined);
        });
      const filePreview = URL.createObjectURL(f);

      sendOrignal.push({
        id: index,
        name: filePreview,
        size: f.size,
        orignalName: f.name,
      });
    });
  };

  const router = useRouter();

  if (isLoad === false) {
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
  }

  return (
    <>
      {isLoad === undefined && (
        <div
          className={styles.dropzone}
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => handleDragOver(e)}
          onDragEnter={(e) => handleDragEnter(e)}
          onDragLeave={(e) => handleDragLeave(e)}
        >
          <div className={styles.mainCard}>
            <p className={styles.headerText}>Image Compressor </p>
            <p className={styles.headerNote}>
              Select up to 25 JPG or JPEG images from your device. Or drag files
              to the drop area. Wait for the compression to finish.
            </p>

            <div className={styles.zoneContainer}>
              <p className={styles.btnLineText}> Drag Your</p>
              <div className={styles.btnjpg}>.JPG</div>
              <div className={styles.btnjpeg}>.JPEG</div>

              <div className={styles.btnpng}>.PNG</div>
              <p className={styles.btnLineText2}>File Here !</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={styles.line1}></div>
              <p className={styles.lineCenterText}>Up to 25 Images</p>
              <div className={styles.line2}></div>
            </div>
            <div
              className={styles.uploadBtn}
              onClick={() => {
                document.getElementById("fileSelect").value = "";
              }}
            >
              <input
                id="fileSelect"
                type="file"
                multiple
                className={styles.files}
                accept="image/png, image/jpg, image/jpeg"
                onChange={(e) => {
                  handleFileSelect(e);
                }}
              />
              <label htmlFor="fileSelect">Upload your files</label>
            </div>
            <span className={styles.warn}>
              Warning :-{" "}
              <p style={{ display: "contents" }}>
                You will lost the data if you will refresh the page
              </p>
            </span>
          </div>

          <Snackbar
            open={open}
            autoHideDuration={8000}
            onClose={handleClose}
            key={vertical + horizontal}
            anchorOrigin={{ vertical, horizontal }}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              {snackMsg}
            </Alert>
          </Snackbar>
        </div>
      )}
      {isLoad === undefined && (
        <FilePreview fileData={data} dispatch={dispatch} />
      )}

      {isLoad === undefined && data.fileList.length > 0 && (
        <button
          onClick={async () => {
            setisLoad(true);
            uploadFiles();
          }}
          className={styles.compressBtn}
        >
          Compress Image
        </button>
      )}
      {isLoad === true && <Loader />}
    </>
  );
};

export default DropZone;
