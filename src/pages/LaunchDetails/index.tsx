import React from "react";
import { useLaunchDetailQuery } from "../../generated/graphql";
import { RingLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import styles from "./LaunchDetails.module.css";
import RocketDetailCard from "../../components/RocketDetailCard";
import LaunchDetailsCard from "../../components/LaunchDetailCard";
import Alert from "@material-ui/lab/Alert";
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
  if (error) {
    return <Alert severity="error">An error occurred</Alert>;
  }

  const launch = data?.launch;
  return (
    <div className={styles.root}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className={styles.heading}>{launch?.mission_name}</h1>
      </div>

      <h1 className={styles.dheading}>Launch Details :</h1>
      <LaunchDetailsCard
        flightNumber={launch?.flight_number}
        ldate={launch?.launch_date_local}
        launchsite={launch?.launch_site?.site_name}
        details={launch?.details}
        launchSuccess={launch?.launch_success}
      />
      <h1 className={styles.dheading}>Rocket Details :</h1>
      <RocketDetailCard
        rocketId={launch?.rocket?.rocket_id}
        rocketName={launch?.rocket?.rocket_name}
        rocketType={launch?.rocket?.rocket_type}
      />
      <div>
        {launch?.links?.flickr_images?.map((image: any) => (
          <img className={styles.dimg} src={image} alt="launch images" />
        ))}
      </div>
    </div>
  );
};

export default LaunchDetail;
