import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Welcome to SpaceX</h1>
      <p className={styles.intro}>
        “You want to wake up in the morning and think the future is going to be
        great - and that’s what being a spacefaring civilization is all about.
        It’s about believing in the future and thinking that the future will be
        better than the past. And I can’t think of anything more exciting than
        going out there and being among the stars.”
      </p>

      <Link to="/launches">
        <button className={styles.expBtn}>Explore Launches</button>
      </Link>
    </div>
  );
};

export default Home;
