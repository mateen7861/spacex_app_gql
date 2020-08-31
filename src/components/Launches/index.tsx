import React from "react";
import LaunchCard from "../LaunchCard";
import { useLaunchesQuery } from "../../generated/graphql";
import { RingLoader } from "react-spinners";
import Alert from "@material-ui/lab/Alert";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
interface lData {
  flight_number: number;
  mission_name: string;
  launch_date_local: string;
  launch_success: boolean;
}
const Launches = () => {
  const { data, error, loading }: any = useLaunchesQuery();
  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}
      >
        <RingLoader color="white" />
      </div>
    );
  }
  if (error) {
    return <Alert severity="error">An error occurred</Alert>;
  }

  return (
    <div>
      {data?.launches.map(
        ({
          flight_number,
          mission_name,
          launch_date_local,
          launch_success,
        }: lData): JSX.Element => (
          <div data-aos="fade-up">
            <LaunchCard
              flightNumber={flight_number}
              mission={mission_name}
              launchDate={launch_date_local}
              launchSuccess={launch_success}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Launches;
