import React from 'react';
import DrawerAppBar from "./navbar";
import styles from "../styles/Home.module.css";



export default function blog() {
  return (
    <div>
      <DrawerAppBar/>
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
  )
}
