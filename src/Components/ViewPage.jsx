import React from "react";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "../CSS/ViewPage.css";
import Ticketlogo from "../../src/Ticketlogo.png";

const ViewPage = () => {
  const handleLogOut = () => {
    navigate("/");
  };
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="HomeContainer">
        <header>
          <span className="ticketlogo">
            <img src={Ticketlogo} alt="TicketLogo"></img>
          </span>
          <input type="text" placeholder="Search Movies" name="search" />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
          <h2 onClick={handleLogOut}>Log Out</h2>
        </header>
        <div className="ViewContent">
        <button className ="backWard" onClick={() => navigate(-1)}> Back</button>

          <h1>{location.state?.data[0].original_title}</h1>
          <h2>Rating: {location.state?.data[0].vote_average / 2}</h2>

          <h3>Release Date : {location.state?.data[0].release_date}</h3>
          <h3>Original Language En</h3>
        </div>
        <iframe src="https://www.youtube.com/embed/GYeSfq_bj_M" />
      </div>
    </>
  );
};

export default ViewPage;
