import React from "react";

import "./CompanyCard.css";

function CompanyCard({ company }) {
  const { companyName, companyIndustry, companyLogo, companyDescription } = company;

  return (

    <div className="card">
      <div className="card-header">
        <h1>{companyName}</h1>
      </div>
      <img src={companyLogo} alt="company" className="img-fluid" />
      <div className="card-body">
        <p>Industry: {companyIndustry}</p>
        <div>
          <p className="company-description">Description: {companyDescription}</p>
        </div>
        
        <p>
          Job Postings:{" "}
          <a href="https://create-react-app.dev/docs/adding-images-fonts-and-files/">
            {companyName} Jobs
          </a>
        </p>
      </div>
    </div>
  );
}

export default CompanyCard;
