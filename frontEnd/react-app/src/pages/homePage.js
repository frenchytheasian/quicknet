import React from "react";

import Button from "@mui/material/Button";
import logo from "../assets/SquareQuicknetLogo.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function HomePage() {
    return (
        <div className="home-page">
            <Helmet>
                <title>QuickNet</title>
            </Helmet>

      <div className="container mt-5">
        <div className="row justify-content-center my-2">
          <div className="col-8 col-md-5 col-lg-3">
            <img src={logo} className="rounded img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center my-2">
          <div className="col-8 col-md-5 col-lg-3">
            <Link to={"/createevent"} className="text-decoration-none">
              <Button variant="outlined" className="w-100">
                Create Event
              </Button>
            </Link>
          </div>
        </div>
        <div className="row justify-content-center my-2">
          <div className="col-8 col-md-5 col-lg-3">
            <Link to={"/dashboard"} className="text-decoration-none">
              <Button variant="outlined" className="w-100">
                View Events
              </Button>
            </Link>
          </div>
        </div>
    );
}

export default HomePage;
