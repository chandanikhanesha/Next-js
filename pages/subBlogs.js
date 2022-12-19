import React, { Fragment, useEffect, useState } from "react";
import DrawerAppBar from "./navbar";
import styles from "../styles/Home.module.css";
import Loader from "../components/loader";
import Head from "next/head";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";

import { useRouter } from "next/router";
export default function SubBlogs() {
  const [blogData, setblogData] = useState([]);

  const query = useRouter();
  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    const id = localStorage.getItem("subBlogId");
    console.log(id, "query");

    try {
      const res = await fetch(
        `https://ilovecompress.appskym.com/api/blog-by-id?blog_id=${id}`
      );
      const data = await res.json();
      //   console.log(data, "data-");
      setblogData(data.data);
    } catch (err) {
      console.log(err, "error from api");
    }
  };

  return (
    <div>
      <Head>
        <title>I Love Compress - Blogs</title>
        <link rel="canonical" href="https://www.ilovecompress.com/blog/" />
      </Head>
      <DrawerAppBar />

      <div className={styles.outerCard}>
        <div className={styles.anothercard}>
          {blogData.length == 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader></Loader>
            </div>
          ) : (
            <div>
              <h2>{blogData.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: blogData.description,
                }}
              />
            </div>
          )}
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.likeText}>Like It ! Share It</div>
        <div className={styles.copyrightText}>
          Copyright @ Image Compressor {new Date().getFullYear()}. All Rights
          Reserved.
        </div>
      </footer>
    </div>
  );
}
