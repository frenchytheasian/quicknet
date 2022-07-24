import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import EventMap from '../pages/EventMap';
import Dashboard from '../pages/DashboardPage';
import CompanySelect from '../pages/CompanySelect';
import CreateEvent from '../pages/CreateEvent';
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

                    {/* <Navigate to="/" /> */}
                </Routes>
            </div>
        </div>
    );
}

export default Main;