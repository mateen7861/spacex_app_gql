import React, { FC } from "react";

import moment from "moment";
import styles from "./LaunchCard.module.css";
import { Link } from "react-router-dom";

interface Props {
  flightNumber: number;
  mission: string;
  launchDate: string;
  launchSuccess: boolean;
}
const LaunchCard: FC<Props> = ({
  flightNumber,
  mission,
  launchDate,
  launchSuccess,
}) => {
  console.log(moment("2020-09-30T20:00:00-04:00").format("MMMM Do, YYYY"));
  return (
    <div>
      <div className={styles.main}>
        <h1>
          {flightNumber}. Mission :{" "}
          <span
            style={{
              display: "inline-block",
              color: launchSuccess ? "green" : "red",
            }}
          >
            {mission}
          </span>
        </h1>
        <p>{moment(launchDate).format("MMMM Do, YYYY")}</p>
        <Link
          to={`/launches/${flightNumber}`}
          style={{ textDecoration: "none" }}
        >
          <button className={styles.detailsBtn}>Launch Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LaunchCard;
