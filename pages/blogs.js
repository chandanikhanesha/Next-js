import React, { Fragment, useEffect, useState } from "react";
import DrawerAppBar from "./navbar";
import styles from "../styles/Home.module.css";
import Loader from "../components/loader";
import Head from "next/head";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import Script from "next/script";
import AdsenseVertical from "./adsense-vertical";

export default function Blog({ blogData, count }) {
  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }
  }, []);

  const [currentPage, setcurrentPage] = useState(1);

  const callAPI = async () => {
    try {
      const d = await fetch(
        `https://ilovecompress.appskym.com/api/blogs?page=${currentPage}`
      );
      const dd = await d.json();
    } catch (err) {
      console.log(err, "error from api");
    }
  };
  const handleClick = (e, path, item) => {
    localStorage.setItem("subBlogId", item.slug);
    // router.push(`/subBlogs?slug=${item.slug}`);
  };

  const handleChange = async (event, value) => {
    setcurrentPage(value);
    await callAPI();
  };
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>I Love Compress - Blogs</title>
        <link rel="canonical" href="https://www.ilovecompress.com/blogs" />
      </Head>
      <DrawerAppBar />
      <div className={styles.main}>
        <div className={styles.outerCard}>
          <div style={{ display: "flex" }}>
            <div>
              <div>
                {/* <AdsenseVertical/> */}
                <AdSense.Google
                  client="ca-pub-3035659895284849"
                  slot="6253585024"
                  style={{ display: "block" }}
                  layout="in-article"
                  format="fluid"
                />
              </div>
              <div>
                {/* <AdsenseVertical/> */}
                <AdSense.Google
                  client="ca-pub-3035659895284849"
                  slot="1816658324"
                  style={{ display: "block" }}
                  layout="in-article"
                  format="fluid"
                />
              </div>
            </div>
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
                  {blogData.length > 0 &&
                    blogData.map((item, i) => {
                      return (
                        <div
                          style={{
                            boxShadow: "0px 16px 40px rgb(112 144 176 / 16%)",
                            // marginRight: "20px",
                          }}
                          key={i}
                        >
                          <div>
                            <h2 style={{ padding: "20px 0px 0px 10px" }}>
                              {" "}
                              {item.title}
                            </h2>
                            <p style={{ padding: "5px 0px 0px 10px" }}>
                              {new Date(item.created_at).toLocaleDateString(
                                "en-us",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                            </p>

                            <a
                              href={`https://www.ilovecompress.com/subblogs/${item.slug}`}
                            >
                              <Image
                                src={item.thumbnail_image}
                                alt={item.title}
                                loading="lazy"
                                width={700}
                                height={400}
                                className={styles.Image}
                                onClick={(e) =>
                                  handleClick(e, "/subBlog", item)
                                }
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                              />
                            </a>

                            <CardContent style={{ padding: "5px" }}>
                              <h4 className={styles.blogLastCard}>
                                {item.short_description}
                              </h4>
                              {/* <div style={{ color: "blue", cursor: "pointer" }}>
                              <div
                                className={styles.readMore}
                                onClick={(e) =>
                                  handleClick(e, "/subBlogs", item)
                                }
                              >
                                <a
                                  href={`https://www.ilovecompress.com/subBlogs?slug=${item.slug}`}
                                >{`Read More ->`}</a>
                              </div>
                            </div> */}
                            </CardContent>
                          </div>
                        </div>
                      );
                    })}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    {" "}
                    <Pagination
                      count={Math.ceil(count)}
                      onChange={(e, v) => handleChange(e, v)}
                    />
                  </div>
                </div>
              )}
              {/* 
          router.push(
                                {
                                  pathname: "/subBlogs",
                                  query: { id: item.id },
                                },
                                "/subBlogs",
                                { shallow: true }
                              ) */}
            </div>
            <div>
              <div>
                {/* <AdsenseVertical/> */}
                <AdSense.Google
                  client="ca-pub-3035659895284849"
                  slot="3584842040"
                  style={{ display: "block" }}
                  layout="in-article"
                  format="fluid"
                />
              </div>
              <div>
                {/* <AdsenseVertical/> */}
                <AdSense.Google
                  client="ca-pub-3035659895284849"
                  slot="6211005388"
                  style={{ display: "block" }}
                  layout="in-article"
                  format="fluid"
                />
              </div>
            </div>
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
    </div>
  );
}

export async function getServerSideProps() {
  const d = await fetch(
    `https://ilovecompress.appskym.com/api/blogs?page=${1}`
  );
  const dd = await d.json();

  return {
    props: {
      blogData: dd.data.data,
      count: Math.ceil(dd.data.total / dd.data.per_page),
    },
  };
}
