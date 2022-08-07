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
export default function Success() {
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
      el.setAttribute("download", `compress-${sourceData.orignalName}`);
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
    if (query.query.compressData == undefined && pathname == "/success") {
      router.push({
        pathname: "/",
      });
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <div className={styles.main} id="mainPage">
        <div className={styles.logodiv}>
          <Image src="/Logo.jpg" alt="Logo" width={190} height={63}></Image>
        </div>

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
              orignalData !== undefined &&
              compressData.length > 0 &&
              compressData.map((item, index) => {
                const Odata =
                  orignalData.length > 0 &&
                  orignalData.find(
                    (o) =>
                      o.orignalName === item.orignalName && o.id === item.id
                  );

                return (
                  <Grid key={index}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Card
                        sx={{ maxWidth: 350 }}
                        style={{
                          width: "220px",
                          margin: "30px 20px 10px 0px",
                          minHeight: "300px",
                        }}
                      >
                        <p className={styles.underText}>Orignal Image</p>
                        <Image
                          src={Odata.name}
                          alt="Picture of the author"
                          width={600}
                          height={600}
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />
                        <CardContent style={{ padding: "5px" }}>
                          <div
                            key={Odata.orignalName}
                            className={styles.fileName}
                          >
                            <p className={styles.flexClass}>
                              {" "}
                              {Odata.orignalName}{" "}
                              <b>[{bytesToSize(Odata.size)}]</b>
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card
                        sx={{ maxWidth: 350 }}
                        style={{
                          width: "220px",
                          margin: "30px 20px 10px 0px",
                          minHeight: "300px",
                        }}
                      >
                        <p className={styles.underText}>Compress Image</p>
                        <Image
                          src={item.name}
                          alt="Picture of the author"
                          width={600}
                          height={600}
                          // blurDataURL="data:..." automatically provided
                          // placeholder="blur" // Optional blur-up while loading
                        />
                        <CardContent style={{ padding: "5px" }}>
                          <div
                            key={item.orignalName}
                            className={styles.fileName}
                          >
                            <p className={styles.flexClass}>
                              {" "}
                              {item.orignalName}{" "}
                              <b>[{bytesToSize(item.size)}]</b>
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
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
