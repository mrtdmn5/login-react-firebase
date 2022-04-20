import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const Film = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="account">
        <div className="sidecontainer">
          <Sidebar />
        </div>
        <div className="createacount">
            Film
        </div>
      </div>
    </div>
  );
};

export default Film;
