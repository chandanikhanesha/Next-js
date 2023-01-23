import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";


export default function AdsenseHorizontal() {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
      <ins
          // className="adsbygoogle"
          className={styles.chandudo}
          // style={{ display: "inline-block", width: "max-content", height: "100px"}}
          // style={{ display: "inline-block", width: "340px", height: "100px"}}
          // style={{ display: "inline-block", width: "400px", height: "100px"}}
          data-ad-client="ca-pub-3035659895284849"
          data-ad-slot="8148464089"
      ></ins>

  );

}