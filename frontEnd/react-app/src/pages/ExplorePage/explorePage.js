import EventFeed from "../../Components/EventFeed";
import Header from "../../Components/headerComponent";

function ExplorePage() {
    return (
        <div>
            <Header expand='md'/>
            <h1>
                Explore Events
            </h1>
            <EventFeed />
        </div>
    )
}

export default ExplorePage;