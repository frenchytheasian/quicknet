import EventCard from "./EventCard";
import './eventFeed.css'

function EventFeed(props) {
    return (
        <div className="event-feed">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <EventCard
                            eventName="Baba J"
                            hostName="Ninja"
                            date="07/23/2022"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <EventCard
                            eventName="Hack Midwest"
                            hostName="Michael Gelphman"
                            date="07/23/2022"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <EventCard
                            eventName="Hack Midwest 2"
                            hostName="Michael Gelphman"
                            date="07/23/2022"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <EventCard
                            eventName="Hack Midwest 3"
                            hostName="Michael Gelphman"
                            date="07/23/2022"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <EventCard
                            eventName="Forty Nitey"
                            hostName="Renegade Raider"
                            date="07/23/2022"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventFeed;