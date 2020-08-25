import React from "react";
import { Button } from "@material-ui/core";
import moment from "moment";
import styles from "./LaunchCard.module.css";
import { Link } from "react-router-dom";
const LaunchCard = ({
  flightNumber,
  mission,
  launchDate,
  launchSuccess,
}: any) => {
  return (
    <div>
      <div className={styles.main}>
        <h1>
          {flightNumber}. Mission :{" "}
          <p
            style={{
              display: "inline-block",
              color: launchSuccess ? "green" : "red",
            }}
          >
            {mission}
          </p>
        </h1>
        <p>{moment(launchDate).format("MMMM Do, YYYY")}</p>
        <Link
          to={`/launches/${flightNumber}`}
          style={{ textDecoration: "none" }}
        >
          <Button className={styles.detailsBtn} variant="contained">
            Launch Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LaunchCard;
