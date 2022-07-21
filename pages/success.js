import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

import imageCompression from "browser-image-compression";
import Image from "next/image";
import { useRouter } from "next/router";

import Router from "next/router";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import CardHeader from "@mui/material/CardHeader";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
export default function success() {
  const [compressData, setcompressData] = useState([]);
  const [orignalData, setorignalData] = useState([]);

  const query = useRouter();
  const router = useRouter();
  function download(source) {
    source.filter((sourceData) => {
      const filePreview = sourceData.name;
      const fileName = filePreview.split("/").pop();
      var el = document.createElement("a");
      el.setAttribute("href", filePreview);
      el.setAttribute("download", `compress-${fileName}`);
      document.body.appendChild(el);
      el.click();
      el.remove();
    });
  }

  function bytesToSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  }
  useEffect(() => {
    const cdata =
      query.query &&
      query.query.compressData !== undefined &&
      JSON.parse(query.query.compressData);
    const odata =
      query.query &&
      query.query.orignalData !== undefined &&
      JSON.parse(query.query.orignalData);
    setorignalData(odata);
    setcompressData(cdata);

    const { pathname } = Router;
    // if (query.query.compressData == undefined && pathname == "/success") {
    //   router.push({
    //     pathname: "/",
    //   });
    // }
  }, [query]);

  console.log(compressData, "compressData", orignalData);
  return (
    <div className={styles.container}>
    <div className={styles.main} id="mainPage">
      <div className={styles.logodiv}>
        <Image src="/Logo.jpg" alt="Logo" width={190} height={63}></Image>
      </div>

      <h1>Can AnyOne Tell Diffenrce</h1>
<div className={styles.imageContainer}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {compressData !== undefined &&
          compressData.length > 0 &&
          compressData.map((item, index) => {
            return (
              <Grid key={index}>
                <Card
                  sx={{ maxWidth: 350 }}
                  style={{
                    width: "220px",
                    margin: "30px 20px 10px 0px",
                    height: "320px",
                  }}
                >
                  <Image
                    src={item.name}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                  <CardContent style={{ padding: "5px" }}>
                    <div key={item.orignalName} className={styles.fileName}>
                      <p>
                        {" "}
                        {item.orignalName} <b>[{bytesToSize(item.size)}]</b>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
            <p>VS</p>
          })}{" "}
      </Grid>

   

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {orignalData !== undefined &&
          orignalData.length > 0 &&
          orignalData.map((item, index) => {
            return (
              <Grid key={index}>
                <Card
                  sx={{ maxWidth: 350 }}
                  style={{
                    width: "220px",
                    margin: "30px 20px 10px 0px",
                    height: "320px",
                  }}
                >
                  <Image
                    src={item.name}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                  <CardContent style={{ padding: "5px" }}>
                    <div key={item.orignalName} className={styles.fileName}>
                      <p>
                        {" "}
                        {item.orignalName} <b>[{bytesToSize(item.size)}]</b>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}{" "}
      </Grid>
      </div>
      {compressData.length > 0 && (
        <button
          onClick={() => download(compressData)}
          className={styles.downloadBtn}
        >
          download img
        </button>
      )}
      <footer className={styles.footer}>
        <div className={styles.likeText}>Like It ! Share It</div>
        <div className={styles.footerText}>
          All uploaded data is deleted after 1 hour
        </div>
        <div className={styles.copyrightText}>
          Copyright @ compressssor {new Date().getFullYear()}. All Rights
          Reserved.
        </div>
      </footer>
    </div>
    </div>
  );
}
