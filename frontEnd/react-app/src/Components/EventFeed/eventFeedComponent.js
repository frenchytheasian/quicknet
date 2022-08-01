import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import "./eventFeed.css";
import { cleanData } from "../../utils";

function EventFeed({user}) {
  const [rawEvents, setRawEvents] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEvents = async () => {
    const url = `http://localhost:8080/api/retrieveEventsFromUser/${user.id}`
    const response = await fetch(
      url
    )
      .then((res) => res.text())
      .then((data) => {
        setRawEvents(data);
      });
  };

  useEffect(() => {
    getEvents();
    const jsonList = cleanData(rawEvents);
    setEvents(jsonList);
    setLoading(false);
    console.log(events);
  }, [rawEvents]);

  return (
    <div className="event-feed">
      {loading && <div>Loading...</div>}
      {!loading && (
        <div className="container">
          {events.map((event) => (
            <div className="row">
              <div className="col">
                <EventCard
                  eventName={event.name}
                  hostName={event.hostName}
                  date={event.date}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EventFeed;
