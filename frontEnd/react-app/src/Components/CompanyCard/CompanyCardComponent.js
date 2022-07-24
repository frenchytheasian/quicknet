import React from "react";

import "./CompanyCard.css";

function CompanyCard({ company }) {
  const { name, field, logo, bio, hiring_link: hiringLink } = company;

  return (

    <div className="card">
      <div className="card-header">
        <h1>{name}</h1>
      </div>
      <img src={logo} alt="company" className="img-fluid" />
      <div className="card-body">
        <p>Industry: {field}</p>
        <div>
          <p className="company-description">Description: {bio}</p>
        </div>
        
        <p>
          Job Postings:{" "}
          <a href={hiringLink}>
            {name} Jobs
          </a>
        </p>
      </div>
    </div>
  );
}

export default CompanyCard;
