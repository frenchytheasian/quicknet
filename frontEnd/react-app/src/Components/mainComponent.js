import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import EventMap from '../pages/EventMap';
import Dashboard from '../pages/DashboardPage';
import CompanySelect from '../pages/CompanySelect';
import CreateEvent from '../pages/CreateEvent';
function Main() {
    const userProps = ({
        id: '62dc756de4320b94f56971d9',
        name: 'John Doe',
        events: [
            {id: 'placeholder',},
            {id: 'placeholder2'}
        ]
    })
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
                        element={ <Dashboard user={userProps}/> }
                    />
                    <Route
                        exact path="/companySelect"
                        element={ <CompanySelect user={userProps}/> }
                    />
                    <Route
                        exact path="/createevent"
                        element={ <CreateEvent user={userProps}/> }
                    />

                    {/* <Navigate to="/" /> */}
                </Routes>
            </div>
        </div>
    );
}

export default Main;