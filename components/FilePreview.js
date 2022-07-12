import React from "react";
import styles from "../styles/FilePreview.module.css";
import Image from "next/image";
const FilePreview = ({ fileData }) => {
  function download(source) {
    console.log(source);
    source.filter((sourceData) => {
      const filePreview = URL.createObjectURL(sourceData);
      const fileName = filePreview.split("/").pop();
      var el = document.createElement("a");
      el.setAttribute("href", filePreview);
      el.setAttribute("download", `compress-${fileName}`);
      document.body.appendChild(el);
      el.click();
      el.remove();
    });
  }
  return (
    <div className={styles.fileList}>
      <div className={styles.fileContainer}>
        {/* loop over the fileData */}
        {fileData.fileList.map((f) => {
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
                    {f.name}
                  </div>
                </li>
              </ol>
            </>
          );
        })}

        <button onClick={() => download(fileData.fileList)}>
          download img
        </button>
      </div>
    </div>
  );
};

export default FilePreview;
