import React from "react";
import styles from "../styles/Demo.module.css";

import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Helllo() {
  return (
    <div>
      <p className={styles.logo}>
        I <FavoriteIcon style={{ color: "red", fontSize: "45px" }} /> Compress
      </p>
      <div style={{ display: "flex" }}>
        <p className={styles.header_text}>
          This online image optimizer uses a smart combination of the best
          optimization and lossy compression algorithms to shrink JPEG, GIF and
          PNG images to the minimum possible size while keeping the required
          level of quality. Upload up to 20 images. Wait for the compression to
          finish. Click thumbnails in the queue for quality setting. Use the
          slider to control the compression level and mouse/gestures to compare
          images.
        </p>
      </div>
  
    </div>
  );
}
