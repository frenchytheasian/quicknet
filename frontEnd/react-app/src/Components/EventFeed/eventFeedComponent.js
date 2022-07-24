import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import './eventFeed.css'
import {cleanData} from "../../utils";

function EventFeed(props) {
  const [rawEvents, setRawEvents] = useState("")
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  const getEvents = async () => {
    const response = await fetch(
      "http://localhost:8080/api/retrieveCollection/events"
    )
      .then((res) => res.text())
      .then((data) => {
        setRawEvents(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getEvents();
    const jsonList = cleanData(rawEvents);
    setEvents(jsonList);
    console.log(jsonList)
    console.log(events)
  }, [rawEvents]);

  return (
    <div className="event-feed">
      <div className="container">
        {events.map((event) => (
          <div className="row">
            <div className="col">
              <EventCard
                eventName={event.eventName}
                hostName={event.hostName}
                date={event.date}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventFeed;
