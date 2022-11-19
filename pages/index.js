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
        <h1>Smart WebP, PNG and JPEG compressions</h1>
<h2>We have optimised more than 1 billion WebP, PNG, and JPEG photos.</h2>

<div>
  <div>
    <h2>What is TinyPNG used for?</h2>
    <p>Your WEBP, JPEG, and PNG files will be smaller thanks to TinyPNG's clever lossy compression methods. Fewer bytes are needed to hold the data by selectively reducing the amount of colours in the image. The difference in file size is substantial despite the effect being almost invisible.</p>
  </div>
  <div>
    <h2>Why should I use TinyPNG?</h2>
    <p>PNG is useful because it’s the only widely supported format that can store partially transparent images. The format uses compression, but the files can still be large. Use TinyPNG to shrink images for your apps and sites. It will use less bandwidth and load faster.</p>
  </div>
  <div>
    <h2>Can anyone distinguish between them?</h2>
    <p>Panda says:Wonderful query! I'll compare them side by side for you. Two pictures of my cousin are shown below. The left image is immediately saved from Adobe Photoshop as a 24-bit PNG. The same image, altered by TinyPNG, can be seen on the right. Can you find a difference?</p>
  </div>
  <div>
    <h2>How does it function?</h2>
    <p><b>Panda says:</b> 
    Wonderful query! Similar colours in your image are blended when a PNG (Portable Network Graphics) file is uploaded. The term "quantization" refers to this method. 24-bit PNG files can be reduced to substantially smaller 8-bit indexed colour images by lowering the amount of colours. Additionally, all extraneous metadata is removed. Better PNG files with full transparency support are the end result. One can have their cake and eat it too!</p>
    
     <p>In the above image the file size is reduced by more than 70%. I have excellent eyesight but can’t spot the difference either! Use the optimized image to save bandwidth and loading time and your website visitors will thank you.</p> 
  </div>
  <div>
<h2>Is it supported everywhere?</h2>
<p><b>Panda says: </b>Excellent question! The files produced by TinyPNG are displayed perfectly on all modern browsers including mobile devices. Still need to support Internet Explorer 6? It normally ignores PNG transparency and displays a solid background color. With TinyPNG the background becomes transparent again. Binary transparency without any workarounds!

</p>
  </div>
  <div>
    <h2>Is it safe to use animated PNG?</h2>
    <p><b>Panda says:</b>Excellent question! Chrome, Firefox, Safari and now Microsoft Edge all support APNG. Only Interned Explorer does not support the format yet.</p>
    <p>Apple added animated stickers to iMessage with the release of iOS 10. If you want to create and compress stickers under 500 KB take a look at the iMessage Panda sticker example on Github.</p>
  </div>
  <div>
    <h2>What about Photoshop?</h2>
    <p><b>Panda says:</b>Excellent question! Only Photoshop CC 2015 or newer can save images as indexed PNG files with alpha transparency. With other versions it is impossible and Photoshop CS5 cannot even display them properly.</p>
    <p>You can use Save for Web to export your images as 24-bit transparent PNG files and upload them to TinyPNG. We’ll convert them to tiny indexed PNG files. You can also install the TinyPNG Photoshop plugin. It allows you to scale, preview and save compressed PNG and JPEG images straight from Photoshop.</p>
  </div>
  <div>
    <h2>Why did you create TinyPNG?</h2>
    <p><b>Panda says:</b> Excellent question! We frequently use PNG images, but were frustrated with the load times. We created TinyPNG in our quest to make our own websites faster and more fun to use with the best compression. In 2014 we added intelligent compression for JPEG images and in 2016 we added support for animated PNG. Compressing images with the website is free for everyone and we like to keep it that way! If you like TinyPNG please contribute by making a donation.</p>
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
