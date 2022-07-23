import React from "react";

import "./CompanyCard.css";

function CompanyCard({ company }) {
  const {companyName, companyIndustry, companyLogo, companyDescription} = company;

  return (
    <div className="company-card">
      <h1 className="company-header">{companyName}</h1>
      <img src={companyLogo} alt="company" className="company-image" />
      <p>Industry: {companyIndustry}</p>
      <p className="company-description">Description: {companyDescription}</p>
      <p>
        Job Postings:{" "}
        <a href="https://create-react-app.dev/docs/adding-images-fonts-and-files/">
          {companyName} Jobs
        </a>
      </p>
    </div>
  );
}

export default CompanyCard;
