import EventFeed from "../../Components/EventFeed";
import Header from "../../Components/headerComponent";

function UpcomingEvents() {
    return (
        <div>
            <Header expand='md'/>
            <div>
                <h1>
                    Upcoming Events
                </h1>
            </div>
            <EventFeed />
        </div>
    )
}

export default UpcomingEvents;