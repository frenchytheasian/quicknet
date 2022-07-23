import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
    return (
      <div>
        <div className="HomePage">Home Page</div>
        <Link to="/test"><Button>Test</Button></Link>
      </div> 
    )
  }

export default HomePage;
