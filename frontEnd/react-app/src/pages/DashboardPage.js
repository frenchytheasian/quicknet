import Header from "../Components/headerComponent";
import EventFeed from "../Components/EventFeed";

function Dashboard() {
    return (
        <div>
            <Header expand='md' />
            <div>
                <div className="container margin-top">
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-8">
                            <EventFeed />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;