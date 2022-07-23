import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Test from './testComponent';
import SwipePage from '../pages/SwipePage/SwipePage';
function Main() {
    return (
        <div>
            <div>
                <Routes>
                <Route
                    path="/"
                    element={ <SwipePage /> }
                />
                </Routes>
            </div>
        </div>
    );
}

export default Main;