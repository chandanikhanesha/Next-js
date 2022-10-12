import React, { useReducer } from "react";

import Head from "next/head";
import DropZone from "../components/DropZone";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Router from "next/router";
import DrawerAppBar from "./navbar"
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
        <title>Compress High-Quality Images Online in Less than a Second - Reduce by 80%</title>
        <meta name="description" content="Compress unlimited images for free in any format like jpg, png, jpeg, webp, gif..., ilovecompress is an online image compressor that helps you to compress images by more than 80% maintaining the original color quality of the picture. Try Now" />
        <link rel="icon" href="/favicon.ico" />
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
        <DrawerAppBar/>
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
