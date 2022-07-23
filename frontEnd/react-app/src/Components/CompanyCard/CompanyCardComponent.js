import React from "react";
import logo from "../../logo.png";
import './CompanyCard.css';

function CompanyCard() {
  const companyName = "Quicknet"
  const companyIndustry = "Technology"
  const companyDescription = "Quicknet is a technology company that specializes in the development of software and hardware solutions for the internet."

  return (
    <div className="company-card">
      <h1 className="company-header">{companyName}</h1>
      <img src={logo} alt="company" className="company-image"/>
      <p>Industry: {companyIndustry}</p>
      <p className="company-description">Description: {companyDescription}</p>
      <p>Job Postings: <a href="https://create-react-app.dev/docs/adding-images-fonts-and-files/">{companyName} Jobs</a></p>


    </div>
  );
}

export default CompanyCard;
