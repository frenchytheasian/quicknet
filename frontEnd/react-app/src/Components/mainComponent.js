import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import EventMap from '../pages/EventMap';
import Dashboard from '../pages/DashboardPage';
import CompanySelect from '../pages/CompanySelect';
import CreateEvent from '../pages/CreateEvent';
import UpcomingEvents from '../pages/UpcomingEventsPage/UpcomingEventsPage';
import ExplorePage from '../pages/ExplorePage/explorePage';
function Main() {
    return (
        <div>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={ <HomePage /> }
                    />
                    <Route
                        exact path="/eventmap"
                        element={ <EventMap /> }
                    />
                    <Route
                        exact path="/dashboard"
                        element={ <Dashboard /> }
                    />
                    <Route
                        exact path="/companySelect"
                        element={ <CompanySelect /> }
                    />
                    <Route
                        exact path="/createevent"
                        element={ <CreateEvent /> }
                    />
                    <Route
                        exact path="/upcomingevents"
                        element={ <UpcomingEvents /> }
                    />
                    <Route
                        exact path="/explore"
                        element={ <ExplorePage /> }
                    />

                    {/* <Navigate to="/" /> */}
                </Routes>
            </div>
        </div>
    );
}

export default Main;