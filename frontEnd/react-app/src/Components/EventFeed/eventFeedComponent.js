import EventCard from "../EventCard";
import "./eventFeed.css";

function EventFeed(props) {
  const events = [
    {
      eventName: "Baba J",
      hostName: "Ninja",
      date: "07/23/2022",
    },
    {
      eventName: "Hack Midwest",
      hostName: "Michael Gelphman",
      date: "07/23/2022",
    },
    {
      eventName: "Hack Midwest 2",
      hostName: "Michael Gelphman",
      date: "07/23/2022",
    },
    {
      eventName: "Hack Midwest 3",
      hostName: "Michael Gelphman",
      date: "07/23/2022",
    },
    {
      eventName: "Forty Nitey",
      hostName: "Renegade Raider",
      date: "07/23/2022",
    },
  ];

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
