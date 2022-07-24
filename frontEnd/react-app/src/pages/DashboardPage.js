import Header from "../Components/headerComponent";
import EventCard from "../Components/eventCardComponent";
import EventFeed from "../Components/eventFeedComponent";

function Dashboard() {
    return (
        <div>
            <Header expand="md" />
            <div>
                <div className="container margin-top">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <EventFeed />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;