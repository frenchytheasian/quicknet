import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Test from './testComponent';

function Main() {
    return (
        <div>
            <div>
                <Routes>
                <Route
                    path="/"
                    element={ <Test /> }
                />
                </Routes>
            </div>
        </div>
    );
}

export default Main;