import React, { Fragment, useEffect, useState } from "react";
import DrawerAppBar from "../navbar";
import styles from "../../styles/Home.module.css";
import Loader from "../../components/loader";
import Head from "next/head";
import { useRouter } from "next/router";

export default function SubBlogs({ slug }) {
  const context = useRouter();
  const [blogData, setblogData] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    callAPI();

    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }

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
        <link
          rel="canonical"
          href={`https://www.ilovecompress.com/subblogs/${slug}`}
        />
      </Head>
      <DrawerAppBar />
      <div style={{ marginTop: "15px" }}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3035659895284849"
          crossorigin="anonymous"
        ></script>

        <ins
          class="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3035659895284849"
          data-ad-slot="8148464089"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <div className={styles.outerCard}>
        <div style={{ display: "flex" }}>
          <div>
            <div>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3035659895284849"
                crossorigin="anonymous"
              ></script>

              <ins
                class="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-3035659895284849"
                data-ad-slot="1816658324"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
            </div>
            <div>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3035659895284849"
                crossorigin="anonymous"
              ></script>

              <ins
                class="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-3035659895284849"
                data-ad-slot="1816658324"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
            </div>
          </div>
          <div>
            {blogData && blogData.length == 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "370px",
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
          <div>
            <div>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3035659895284849"
                crossorigin="anonymous"
              ></script>

              <ins
                class="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-3035659895284849"
                data-ad-slot="1816658324"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
            </div>
            <div>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3035659895284849"
                crossorigin="anonymous"
              ></script>

              <ins
                class="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-3035659895284849"
                data-ad-slot="1816658324"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
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
  );
}

export async function getServerSideProps(context) {
  const { slug } = context;
  return { props: { slug: context.query.slug } };
}
