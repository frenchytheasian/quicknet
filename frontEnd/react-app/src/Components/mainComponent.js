import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/homePage';
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
                    {/* <Navigate to="/" /> */}
                </Routes>
            </div>
        </div>
    );
}

export default Main;