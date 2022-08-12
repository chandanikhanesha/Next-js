import React, { useReducer } from "react";

import Head from "next/head";
import DropZone from "../components/DropZone";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  // reducer function to handle state changes
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
        case "REMOVE_FILE_TO_LIST":

          return {...state ,fileList:state.fileList.filter((f,index)=> index !==action.i)}
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, {
    inDropZoneinDropZone: false,
    fileList: [],
  });

  // const isCompress = localStorage.getItem("isCompress");
  return (
    <div className={styles.container}>
      <Head>
        <title>Drag And Drop File Upload</title>
        <meta name="description" content="Nextjs drag and drop file upload" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} id="mainPage">
        <div className={styles.logodiv}>
          <Image src="/Logo.jpg" alt="Logo" width={190} height={63}></Image>
        </div>

        {/* <h1 className={styles.title}>Drag And Drop File Upload</h1> */}
        {/* Pass state data and dispatch to the DropZone component */}
        <DropZone data={data} dispatch={dispatch} />
      </main>

      <footer className={styles.footer}>
        <div className={styles.likeText}>Like It ! Share It</div>
        <div className={styles.footerText}>
          All uploaded data is deleted after Refreshing
        </div>
        <div className={styles.copyrightText}>
          Copyright @ Image Compressor  {new Date().getFullYear()}. All Rights
          Reserved.
        </div>
      </footer>
    </div>
  );
}
