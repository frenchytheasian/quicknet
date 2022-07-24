import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import SwipePage from '../pages/SwipePage';
import Test from './testComponent';
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
                        exact path="/test"
                        element={ <Test /> }
                    />
                     <Route
                        exact path="/swipe"
                        element={ <SwipePage /> }
                    />
                    {/* <Navigate to="/" /> */}
                </Routes>
            </div>
        </div>
    );
}

export default Main;