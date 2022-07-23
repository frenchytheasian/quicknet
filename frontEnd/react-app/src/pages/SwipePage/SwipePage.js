import React from "react";
import CompanyCard from "../../Components/CompanyCard";
import "./SwipePage.css";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";

function SwipePage() {
  function handleRejectClick(evt) {
    console.log("Reject Clicked");
  }

  function handleAcceptClick(evt) {
    console.log("Accept Clicked");
  }

  return (
    <div className="swipe-page">
      <div className="swipe-page-contents">
        <CompanyCard />
        <div className="swipe-page-buttons">
          <ButtonGroup className="d-flex">
            <Button
              className="p-2 flex-fill"
              variant="contained"
              color="error"
              onClick={handleRejectClick}
            >
              Reject
            </Button>
            <Button
              className="p-2 flex-fill"
              variant="outlined"
              color="success"
              onClick={handleAcceptClick}
            >
              Accept
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default SwipePage;
