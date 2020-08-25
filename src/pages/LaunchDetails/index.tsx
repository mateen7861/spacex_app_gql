import React from "react";
import { useLaunchDetailQuery } from "../../generated/graphql";
import { RingLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import styles from "./LaunchDetails.module.css";
const LaunchDetail = () => {
  const { id } = useParams();
  const { data, error, loading } = useLaunchDetailQuery({
    variables: { id },
  });

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 15 + "rem",
        }}
      >
        <RingLoader color="white" />
      </div>
    );
  }
  console.log(data?.launch?.details);

  return (
    <div className={styles.root}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className={styles.heading}>{data?.launch?.mission_name}</h1>
      </div>
      <div></div>
    </div>
  );
};

export default LaunchDetail;
