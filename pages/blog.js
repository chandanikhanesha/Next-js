import React, {useEffect,useState} from "react";
import DrawerAppBar from "./navbar";
import styles from "../styles/Home.module.css";
import Axios from "axios";
import Loader from "../components/loader";

export default function Blog() {
  const [blogData, setblogData] = useState("");
  useEffect(() => {
    Axios.get("http://admin.ilovecompress.appskym.com/api/blogs").then(
      (res) => {
        // console.log(res.data.data.data[0], "res");
        setblogData(res.data.data.data[0].description);
      }
    );
  }, []);

  return (
    <div>
      <DrawerAppBar />
      <div className={styles.outerCard}>
        <div className={styles.anothercard}>
          {blogData == "" ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
            <Loader />
            </div>
          ) : (
            <div>
              <h2>Methods to Compress JPEG under 50KB</h2>
              <div
                className={styles.blogCard}
                dangerouslySetInnerHTML={{ __html: blogData }}
              />
            </div>
          )}
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.likeText}>Like It ! Share It</div>
        <div className={styles.copyrightText}>
          Copyright @ Image Compressor {new Date().getFullYear()}. All Rights
          Reserved.
        </div>
      </footer>
    </div>
  );
}
