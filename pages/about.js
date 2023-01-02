import React from "react";
import DrawerAppBar from "./navbar";
import styles from "../styles/Home.module.css";
import Head from "next/head";

function About() {
  return (
    <div>
      <Head>
        <title>I Love Compress - About Us</title>
        <link rel="canonical" href="https://www.ilovecompress.com/about" />
      </Head>
      <DrawerAppBar />
      <div className={styles.outerCard}>
        <div style={{display:"flex"}}>
          <div id="advertise" style={{ height: "200px", width: "300px" }}></div>
          <div className={styles.anothercard}>
            <h2>About Us</h2>
            <p>
              I Love Compress is easy to use tool that compress your photos and
              reduce their size quickly. As we all know that compress jpeg
              images with multiple images can be time consuming and sometimes it
              becomes very frustrating.
            </p>
            <p>
              Thats how I Love Compress comes in light, we provide easy to use
              and most efficient image compression service. We do not store your
              data to our servers that’s how we respect your privacy. This
              process will drastically improve speed of the compress jpg and
              that help you to reduce image size also.
            </p>
            <p>
              We strongly believe in improving user experience while using our
              website thats how our small engineers team actively working to
              improve features and performance of the website. Even though, we
              want to hear your thoughts and suggestions about improving the
              performance of the website. Please contact us without hesitating
              and give us your valuable suggestions and improvement ideas.
            </p>
          </div>
          <div id="advertise" style={{ height: "200px", width: "300px" }}></div>
        </div>
      </div>
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

export default About;
