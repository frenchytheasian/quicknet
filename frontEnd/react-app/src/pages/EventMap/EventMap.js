import React from "react";
import { Link } from "react-router-dom";
import { TableContainer, Table } from "@mui/material";
import { Button } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function EventMap() {
  const companies = [
    "Trevipay",
    "H&R Block",
    "Pinata",
    "RX Savings Solutions",
    "Ascend Learning",
    "Symplr",
    "GEHA",
    "Spring Venture Group",
    "Equipment Share",
    "SS&C",
    "CivicPlus",
    "MongoDB",
    "Veterans United",
    "Quest Analytics",
    "Federal Reserve Bank of Kansas City",
    "Gitlab",
    "Jack Henry",
    "Tripleblind",
    "Advantage Tech",
    "Storewise",
    "NAIC",
    "Veeva",
    "FNBO",
    "CBOE",
    "Torch.AI",
    "Telnyx",
    "Epiq",
    "Ad Astra",
    "Security Benefit",
    "SunLife",
    "Homebase",
  ];
  return (
    <div>
      <div className="header">
        <h1>Event Map</h1>
        <Link to={'/dashboard'}>
        <Button variant='outlined'>Go Home</Button>
        </Link>
      </div>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Table Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((company, ind) => (
              <TableRow key={company}>
                <TableCell>{company}</TableCell>
                <TableCell>{ind + 1}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EventMap;
