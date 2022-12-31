import React, { Fragment, useEffect, useState } from "react";
import DrawerAppBar from "../navbar";
import styles from "../../styles/Home.module.css";
import Loader from "../../components/loader";
import Head from "next/head";
import { useRouter } from "next/router";

export default function SubBlogs({slug}) {
  const context = useRouter();
  const [blogData, setblogData] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    // const [id,setID] = useState(localStorage.getItem("subBlogId"));
    const slug = localStorage.getItem("subBlogId");

    try {
      const res = await fetch(
        `https://ilovecompress.appskym.com/api/blog-by-slug?slug=${slug}`
      );
      const data = await res.json();

      setblogData(data.data);
    } catch (err) {
      console.log(err, "error from api");
    }
  };

  return (
    <div>
      <Head>
        <title>I Love Compress - Blogs</title>
        <link rel="canonical" href={`https://www.ilovecompress.com/subblogs/${slug}`} />
      </Head>
      <DrawerAppBar />

      <div className={styles.outerCard}>
       
          {blogData && blogData.length != 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width:"370px"
              }}
            >
              <Loader></Loader>
            </div>
          ) : (
            <div>
               <div className={styles.anothercard}>
              <h2>{blogData && blogData.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: blogData?.description,
                }}
              />
            </div>
            </div>
          )}
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


export async function getServerSideProps(context) {
  const { slug } = context;
  return { props: { slug: context.query.slug } };
}