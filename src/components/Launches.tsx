import React from "react";
import LaunchCard from "./LaunchCard";
import { useLaunchesQuery } from "../generated/graphql";
import { RingLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
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
  if (data) {
    data?.launches.map((launch: any) => console.log(launch));
  }
  return (
    <div>
      {data?.launches.map((launch: any) => (
        <div data-aos="fade-up">
          <LaunchCard
            flightNumber={launch.flight_number}
            mission={launch.mission_name}
            launchDate={launch.launch_date_local}
            launchSuccess={launch.launch_success}
          />
        </div>
      ))}
    </div>
  );
};

export default Launches;
