import React, { useReducer } from "react";

import Head from "next/head";
import DropZone from "../components/DropZone";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Router from "next/router";
import DrawerAppBar from "./navbar";
export default function Home() {
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
        <meta
          name="description"
          content="Compress unlimited images for free in any format like jpg, png, jpeg, webp, gif..., ilovecompress is an online image compressor that helps you to compress images by more than 80% maintaining the original color quality of the picture. Try Now"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10835311766"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-10835311766');`,
          }}
        ></script>
        <script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KJ6QQWD');`,
          }}
        ></script>
      </Head>

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
        <DropZone data={data} dispatch={dispatch} />

        <div className={styles.outerCard}>
          <div className={styles.anothercard}>
            <h1 className={styles.contentText}>
              Smart JPEG, PNG and JPG compressions
            </h1>

            <div>
              <div>
                <h2>What is the purpose of ILoveCompress?</h2>
                <p>
                  The smart lossy compression techniques used by ILoveCompress
                  will result in lower WEBP, JPEG, and PNG files. By
                  deliberately lowering the number of colours in the image,
                  fewer bytes are required to store the data. Despite the effect
                  being barely invisible, the difference in file size is
                  significant.
                </p>
              </div>
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
                  resolution images with same quality without losing it and also
                  it will compress your images within a seconds.
                </p>
              </div>
              <div>
                <h2>How does it function?</h2>
                <p>
                  {" "}
                  Similar colours in your image are blended when a PNG Portable
                  Network Graphics file is uploaded. The term quantization
                  refers to this method. 24-bit PNG files can be reduced to
                  substantially smaller 8-bit indexed colour images by lowering
                  the amount of colours.
                </p>
                <p>
                  In the above image the file size is reduced by more than 70%.
                  I have excellent eyesight but cant spot the difference either!
                  Use the optimized image to save bandwidth and loading time and
                  your website visitors will thank you.
                </p>
              </div>
              <div>
                <h2>Is it supported everywhere?</h2>
                <p>
                  The files produced by ILoveCompress are displayed perfectly on
                  all modern browsers including mobile devices.
                </p>
              </div>
              <div>
                <h2>Why we create ILoveCompress?</h2>
                <p>
                  We frequently use JPEG images, but were frustrated with the
                  load times. We created ILoveCompress in our quest to make our
                  own websites faster and more fun to use with the best
                  compression. Compressing images with the website is free for
                  everyone and we like to keep it that way! If you like
                  ILoveCompress please support us.
                </p>
              </div>
            </div>
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
