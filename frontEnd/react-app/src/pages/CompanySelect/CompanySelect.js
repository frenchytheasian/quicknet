import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CompanyCard from "../../Components/CompanyCard";
import "./CompanySelect.css";
import Button from "@mui/material/Button";
import {cleanData} from "../../utils";

function SwipePage() {
  const [counter, setCounter] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);
  const [companyRetrieval, setCompanyRetrieval] = useState("");
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    const response = await fetch(
      "http://localhost:8080/api/retrieveCollection/companies"
    )
      .then((res) => res.text())
      .then((data) => {
        setCompanyRetrieval(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getCompanies();
    const jsonList = cleanData(companyRetrieval);
    setCompanies(jsonList);
  }, [companyRetrieval]);

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
      {loading && <div>Loading...</div>}
      {isEmpty && !loading && (
        <div className="column justify-content">
          <h3>You have swiped on all of the companies</h3>
          <Link to={"/eventmap"}>Continue</Link>
        </div>
      )}
      {!isEmpty && !loading && (
        <div className="container mt-5 mt-md-3">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-5">
              <CompanyCard company={companies[counter]} />
              <div className="row justify-content-center mt-1">
                <div className="col-5">
                  <Button
                    className="p-2 w-100"
                    variant="outlined"
                    color="error"
                    onClick={handleRejectClick}
                  >
                    Not Interested
                  </Button>
                </div>
                <div className="col-5 ml-0">
                  <Button
                    className="p-2 w-100"
                    variant="contained"
                    color="success"
                    onClick={handleAcceptClick}
                  >
                    Interested
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SwipePage;
