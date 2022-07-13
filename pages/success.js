import React, { useEffect, useState } from "react";
import styles from "../styles/DropZone.module.css";

import imageCompression from "browser-image-compression";
import Image from "next/image";
import { useRouter } from "next/router";
export default function success() {
  const [compressData, setcompressData] = useState([]);
  const [
    orignalData, setorignalData] = useState([])

  const query = useRouter();
  function download(source) {
   
    source.filter((sourceData) => {
      const filePreview =sourceData.name;
      const fileName = filePreview.split("/").pop();
      var el = document.createElement("a");
      el.setAttribute("href", filePreview);
      el.setAttribute("download", `compress-${fileName}`);
      document.body.appendChild(el);
      el.click();
      el.remove();
    });
  }
  
  function bytesToSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  }
  useEffect(() => {
    console.log(query.query.compressData, "---------");
    const cdata = query.query && query.query.compressData !==undefined&& JSON.parse(query.query.compressData);
    const odata= query.query && query.query.orignalData !==undefined&&JSON.parse(query.query.orignalData)
    setorignalData(odata)
    setcompressData(cdata);
  }, [query]);

  console.log(compressData, "compressData",orignalData);
  return <div>
      <div className={styles.fileContainer}>
  {/* loop over the fileData */}
  {compressData.length>0&&compressData.map((f) => {
    const size = bytesToSize(f.size);
   

    return (
      <>
        <ol>
          <li key={f.lastModified} className={styles.fileList}>
            {/* display the filename and type */}
            <Image
              src={f.name}
              alt="Picture of the author"
              width={500}
              height={500}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <div key={f.name} className={styles.fileName}>
              {f.name} {size}
            </div>
          </li>
        </ol>
      </>
    );
  })}
 {compressData.length>0&&   <button onClick={() => download(compressData)}>
    download img
  </button>}
    {orignalData.length>0&&orignalData.map((f) => {
    const size = bytesToSize(f.size);
   

    return (
      <>
        <ol>
          <li key={f.lastModified} className={styles.fileList}>
            {/* display the filename and type */}
            <Image
              src={f.name}
              alt="Picture of the author"
              width={500}
              height={500}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <div key={f.name} className={styles.fileName}>
              {f.name} {size}
            </div>
          </li>
        </ol>

      </>
    );
    
  })}


</div></div>;
}
