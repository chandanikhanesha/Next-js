import React, {useEffect,useState} from "react";
import DrawerAppBar from "./navbar";
import styles from "../styles/Home.module.css";

import Loader from "../components/loader";

export default function Blog() {
  const [blogData, setblogData] = useState("");
  useEffect(() => {
    callAPI()
  }, []);


  const callAPI = async () => {
		try {
			const res = await fetch(
				`http://admin.ilovecompress.appskym.com/api/blogs`
			);
			const data = await res.json();
      // console.log(data,"data-");
		  setblogData(data.data.data[0].description);

		} catch (err) {
			console.log(err,"error from api");
		}
	};
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
