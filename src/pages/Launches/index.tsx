import React from "react";
import styles from "./Launches.module.css";

import LaunchesComp from "../../components/Launches";
const Launches = () => {
  return (
    <div className={styles.root}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>SpaceX Launches</h1>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.sfMain}>
        <div className={styles.sfContainer}>
          <div className={styles.succesBlock}></div>
          <p style={{ margin: "0 1rem" }}>=</p>
          <p>Success</p>
        </div>
        <br />

        <div className={styles.sfContainer}>
          <div className={styles.failBlock}></div>
          <p style={{ margin: "0 1rem" }}>=</p>
          <p>Fail</p>
        </div>
      </div>
      <LaunchesComp />
    </div>
  );
};

export default Launches;
