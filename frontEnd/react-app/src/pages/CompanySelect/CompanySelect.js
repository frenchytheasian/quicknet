import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompanyCard from "../../Components/CompanyCard";
import "./CompanySelect.css";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";

function SwipePage() {
  const [counter, setCounter] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);

  const companies = [
    {
      companyLogo: logo,
      companyName: "Quicknet",
      companyIndustry: "Technology",
      companyDescription:
        "Quicknet is a technology company that specializes in the development of software and hardware solutions for the internet.",
    },
    {
      companyLogo: logo,
      companyName: "Rando",
      companyIndustry: "Cattle Ranching",
      companyDescription:
        "Rando is a cattle ranching company that specializes in raising cattle.",
    },
    {
      companyLogo: logo,
      companyName: "Gwease",
      companyIndustry: "Pulic Waste Management",
      companyDescription:
        "Gwease is a public waste management company that specializes in the collection and disposal of public waste.",
    },
  ];

  function updateCompanies() {
    if (counter >= companies.length - 1) {
      setIsEmpty(true);
    } else {
      setCounter((prevCounter) => prevCounter + 1);
    }
  }

  function handleRejectClick() {
    console.log("Reject Clicked");
    updateCompanies();
  }

  function handleAcceptClick() {
    console.log("Accept Clicked");
    updateCompanies();
  }

  return (
    <div className="swipe-page">
      {isEmpty ? (
        <div>
          <h3>You have swiped on all of the companies</h3>
          <Link to={'/eventmap'}>Continue</Link>
        </div>
      ) : (
        <div className="swipe-page-contents">
          <CompanyCard company={companies[counter]} />
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
      )}
    </div>
  );
}

export default SwipePage;
