import React from "react";
import styles from "../styles/FilePreview.module.css";
import Image from "next/image";
const FilePreview = ({ fileData }) => {


  function bytesToSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  }
  return (
    <div className={styles.fileList}>
      <div className={styles.fileContainer}>
        {/* loop over the fileData */}
        {fileData.fileList.map((f) => {
          const size = bytesToSize(f.size);
          const filePreview = URL.createObjectURL(f);

          return (
            <>
              <ol>
                <li key={f.lastModified} className={styles.fileList}>
                  {/* display the filename and type */}
                  <Image
                    src={filePreview}
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

  
      </div>
    </div>
  );
};

export default FilePreview;
