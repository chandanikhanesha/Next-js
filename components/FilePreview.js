import React, { useState, useEffect } from "react";
import styles from "../styles/FilePreview.module.css";
import Image from "next/image";

import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import CardHeader from "@mui/material/CardHeader";
import ClearIcon from "@mui/icons-material/Clear";
const FilePreview = ({ fileData, dispatch }) => {
  const [file, setfile] = useState([]);

  const [show, setShow] = useState([]);
  function bytesToSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  }
  useEffect(() => {
    setfile(fileData.fileList);
  }, [fileData]);

  const deleteImage = async (i) => {
    setfile(file.filter((d, index) => index !== i));

    dispatch({ type: "REMOVE_FILE_TO_LIST", i });
  };
  return (
    <div className={styles.fileList}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {file !== undefined &&
          file.length > 0 &&
          file.map((f, index) => {
            const size = bytesToSize(f.size);
            const filePreview = URL.createObjectURL(f);

            return (
              <Grid key={index}>
                <Card
                  sx={{ maxWidth: 350 }}
                  style={{
                    width: "220px",
                    margin: "30px 20px 10px 0px",
                    height: "320px",
                  }}
                  onMouseOver={() => setShow([...show, index])}
                  onMouseOut={() => setShow(show.filter((s) => s !== index))}
                >
                  <CardHeader
                    style={{
                      position: "absolute",
                      zIndex: "99",
                      width: "inherit",
                    }}
                    action={
                      show.includes(index) && (
                        <IconButton
                          aria-label="settings"
                          onClick={() => deleteImage(index)}
                          style={{
                            backgroundColor: "white",
                            height: "30px",
                            width: "30px",
                            boxShadow: " 0px 16px 40px #19203330",
                          }}
                        >
                          <ClearIcon style={{ fontSize: "17px" }} />
                        </IconButton>
                      )
                    }
                  ></CardHeader>
                  <Image
                    src={filePreview}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                  <CardContent style={{ padding: "5px" }}>
                    <div key={f.name} className={styles.fileName}>
                      <p>
                        {" "}
                        {f.name} <b>[{size}]</b>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default FilePreview;
