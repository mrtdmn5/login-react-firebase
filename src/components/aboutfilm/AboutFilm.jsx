import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="account">
        <div className="sidecontainer">
          <Sidebar />
        </div>
        <div className="createacount">
            About
        </div>
      </div>
    </div>
  );
};

export default About;
