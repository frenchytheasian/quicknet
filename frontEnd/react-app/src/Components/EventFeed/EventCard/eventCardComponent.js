import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./eventCard.css";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

function showMore(id) {
  console.log("hidden-details-" + id);
  let details = document.getElementById("hidden-details-" + id);
  let button = document.getElementById("details-btn-" + id);
  // console.log(details)

  console.log(details.style.display === "none");
  console.log(details.style.getPropertyValue("display"));
  if (details.style.display === "none") {
    details.style.display = "block";
    button.innerText = "Less Details";
  } else {
    details.style.display = "none";
    button.innerText = "More Details";
  }
}

function EventCard(props) {
  return (
    <div className="event-card shadow rounded">
      <Card
        style={{
          width: "100%",
        }}
      >
        {/* <img
                    alt="Card image"
                    src="https://picsum.photos/300/200"
                /> */}

        <CardBody>
          <Link to={"/companySelect"}>
            <CardTitle tag="h5">{props.eventName}</CardTitle>
          </Link>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.hostName}
          </CardSubtitle>
          <CardText>{props.date}</CardText>
          <CardText
            id={"hidden-details-" + props.eventName}
            style={{ display: "none" }}
          >
            <hr></hr>
            <p>Here are more details about the event!</p>
          </CardText>
          <Button
            onClick={showMore.bind(this, props.eventName)}
            id={"details-btn-" + props.eventName}
          >
            More Details
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default EventCard;
