import React from "react";
import styles from "../styles/Loader.module.css"

export default function loader() {
  return <div className={styles.container}>
    <div className={styles.gooey}>
  <span className={styles.dot}></span>
  <div className={styles.dots}>
    <span  className={styles.span}></span>
    <span  className={styles.span}></span>
    <span  className={styles.span}></span>
  </div>
</div></div>;
}
