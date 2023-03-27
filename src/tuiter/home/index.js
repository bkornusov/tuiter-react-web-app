import React from "react";
import WhatsHappening from "./whats-happening";
import TuitList from "../tuits";
import "../explore/index.css";

const HomeComponent = () => {
  return (
    <>
      <h4>Home</h4>
      <WhatsHappening />
      <TuitList />
    </>
  );
};
export default HomeComponent;
