import React, { useReducer, useEffect, useState } from "react";
import Head from "next/head";
import DropZone from "../components/DropZone";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import DrawerAppBar from "./navbar";
import AdsenseHorizontal from "./adsense-horizontal";
import AdsenseSquare from "./adsense-square";
import AdsenseVertical from "./adsense-vertical";

export default function Home() {

  const [isWebsite, setIsWebsite] = useState(false)
  
  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }

    const isDesktopSite = (window.navigator.userAgent.includes("Mac") || window.navigator.userAgent.includes('Win'))
    setIsWebsite(isDesktopSite)

  }, []);

  const router = useRouter();

  // reducer function to handle state changes
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      case "REMOVE_FILE_TO_LIST":
        return {
          ...state,
          fileList: state.fileList.filter((f, index) => index !== action.i),
        };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });

  // const isCompress = localStorage.getItem("isCompress");
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Compress High-Quality Images Online in Less than a Second - Reduce by
          80%
        </title>
        <link rel="canonical" href="https://www.ilovecompress.com" />
        <meta
          name="description"
          content="Compress unlimited images for free in any format like jpg, png, jpeg, webp, gif..., ilovecompress is an online image compressor that helps you to compress images by more than 80% maintaining the original color quality of the picture. Try Now"
        />
        {/* <link rel="canonical" href="https://www.ilovecompress.com/" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <main className={styles.main} id="mainPage">
        <DrawerAppBar />
        {/* <div
          className={styles.logodiv}
          onClick={() =>
            router.push({
              pathname: "/",
            })
          }
        >
          <Image src="/Logo.jpg" alt="Logo" width={190} height={63}></Image>
        </div> */}

        {/* <h1 className={styles.title}>Drag And Drop File Upload</h1> */}
        {/* Pass state data and dispatch to the DropZone component */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // backgroundColor:"red",
          }}
        >
          <AdsenseHorizontal />
        </div>
        <div style={{ display: "flex" }}>
          {isWebsite &&<div
            style={{
              display: "flex",
              // flexDirection: "column",
              // backgroundColor: "black",
              // height: "600px;",
              // width: "200px;",
            }}
          >
            <AdsenseVertical />
          </div>}
          <div>
            <DropZone data={data} dispatch={dispatch} />
          </div>
          {isWebsite && <div
            style={{
              display: "flex",
              // flexDirection: "column",
              // backgroundColor: "black",
              // height: "600px;",
              // width: "200px;",
            }}
          >
            <AdsenseVertical />
          </div>}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // backgroundColor:"red",
          }}
        >
          <AdsenseHorizontal />
        </div>

        <div className={styles.outerCard}>
          <div className={styles.anothercard} style={{ width: "100%" }}>
            <h1 className={styles.contentText}>
              Smart JPEG, PNG and JPG compressions
            </h1>

            <div style={{ display: "flex" }}>
              {isWebsite && <div>
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "column",
                    // backgroundColor: "black",
                    // height: "250px;",
                    // width: "250px;",
                  }}
                >
                  <AdsenseSquare />
                </div>
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "column",
                    // backgroundColor: "green",
                    // height: "250px;",
                    // width: "250px;",
                  }}
                >
                  <AdsenseSquare />
                </div>
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "column",
                    // backgroundColor: "black",
                    // height: "250px;",
                    // width: "250px;",
                  }}
                >
                  <AdsenseSquare />
                </div>
              </div>}
              <div style={{ padding: "10px" }}>
                <div>
                  <h2>What is the purpose of ILoveCompress?</h2>
                  <p>
                    The smart lossy compression techniques used by ILoveCompress
                    will result in lower WEBP, JPEG, and PNG files. By
                    deliberately lowering the number of colours in the image,
                    fewer bytes are required to store the data. Despite the
                    effect being barely invisible, the difference in file size
                    is significant.
                  </p>
                </div>
                {!isWebsite && 
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        // flexDirection: "column",
                        // backgroundColor: "black",
                        // height: "250px;",
                        // width: "250px;",
                      }}
                  >
                  <AdsenseSquare />
                  </div>
                </div>}
                <div>
                  <h2>Why should I use ILoveCompress?</h2>
                  <p>
                    PNG is useful because its the only widely supported format
                    that can store partially transparent images. The format uses
                    compression, but the files can still be large. Use
                    ILoveCompress to shrink images for your apps and sites. It
                    will use less bandwidth and load faster.
                  </p>
                  <p>
                    I Love Compress is providing service to compress your high
                    resolution images with same quality without losing it and
                    also it will compress your images within a seconds.
                  </p>
                </div>
                <div>
                  <h2>How does it function?</h2>
                  <p>
                    {" "}
                    Similar colours in your image are blended when a PNG
                    Portable Network Graphics file is uploaded. The term
                    quantization refers to this method. 24-bit PNG files can be
                    reduced to substantially smaller 8-bit indexed colour images
                    by lowering the amount of colours.
                  </p>
                  <p>
                    In the above image the file size is reduced by more than
                    70%. I have excellent eyesight but cant spot the difference
                    either! Use the optimized image to save bandwidth and
                    loading time and your website visitors will thank you.
                  </p>
                </div>
                {!isWebsite && 
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        // flexDirection: "column",
                        // backgroundColor: "black",
                        // height: "250px;",
                        // width: "250px;",
                      }}
                  >
                  <AdsenseSquare />
                  </div>
                </div>}
                <div>
                  <h2>Is it supported everywhere?</h2>
                  <p>
                    The files produced by ILoveCompress are displayed perfectly
                    on all modern browsers including mobile devices.
                  </p>
                </div>
                <div>
                  <h2>Why we create ILoveCompress?</h2>
                  <p>
                    We frequently use JPEG images, but were frustrated with the
                    load times. We created ILoveCompress in our quest to make
                    our own websites faster and more fun to use with the best
                    compression. Compressing images with the website is free for
                    everyone and we like to keep it that way! If you like
                    ILoveCompress please support us.
                  </p>
                </div>
              </div>
              {isWebsite && <div>
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "column",
                    // backgroundColor: "green",
                    // height: "250px;",
                    // width: "250px;",
                  }}
                >
                  <AdsenseSquare />
                </div>
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "column",
                    // backgroundColor: "black",
                    // height: "250px;",
                    // width: "250px;",
                  }}
                >
                  <AdsenseSquare />
                </div>
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "column",
                    // backgroundColor: "green",
                    // height: "250px;",
                    // width: "250px;",
                  }}
                >
                  <AdsenseSquare />
                </div>
              </div>}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // backgroundColor: "red",
            }}
          >
            <AdsenseHorizontal />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.likeText}>Like It ! Share It</div>
        {/* <div className={styles.footerText}>
          All uploaded data is deleted after refreshing
        </div> */}
        <div className={styles.copyrightText}>
          Copyright @ Image Compressor {new Date().getFullYear()}. All Rights
          Reserved.
        </div>
      </footer>
    </div>
  );
}
