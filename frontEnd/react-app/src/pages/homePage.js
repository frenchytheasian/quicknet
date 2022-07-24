import React from "react";

import Button from '@mui/material/Button';
import logo from "../assets/SquareQuicknetLogo.png";
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div className="home-page">
            <div className="container mt-5">
                <div className="row justify-content-center my-2">
                    <div className="col-8 col-md-5 col-lg-3">
                        <img src={logo} className="rounded img-fluid" />
                    </div>
                </div>
                <div className="row justify-content-center my-2">
                    <div className="col-8 col-md-5 col-lg-3">
                        <Link to={'/createevent'} className='text-decoration-none'>
                            <Button variant="outlined" className="w-100">Create Event</Button>
                        </Link>
                    </div>
                </div>
                <div className="row justify-content-center my-2">
                    <div className="col-8 col-md-5 col-lg-3">
                        <Button variant="outlined" className="w-100">Login</Button>
                    </div>
                </div>
            </div>
        </div>
        // <div className="HomePage" style={{
        //     display: 'flex',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     height: '100vh',
        // }}>
        //     <cl>
        //         <h1>
        //             <img src={logo} className="rounded" style={{
        //                 display: 'flex',
        //                 alignItems: 'center',
        //                 justifyContent: 'center',
        //                 height: '20vw',
        //             }} />
        //         </h1>
        //         <h2>
        //             <Link to={'/createevent'} className='text-decoration-none'>
        //                 <Button variant="outlined" style={{
        //                     minWidth: '20vw',
        //                 }}>Create Event</Button>
        //             </Link>

        //         </h2>
        //         <h3>
        //             <Button variant="outlined" style={{
        //                 minWidth: '20vh',
        //             }}>Login</Button>
        //         </h3>
        //     </cl>
        // </div>
    );
}

export default HomePage;
