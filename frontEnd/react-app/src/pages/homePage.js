import React from "react";
import Button from '@mui/material/Button';
import logo from "../assets/SquareQuicknetLogo.png";


function HomePage() {
    return (
        <div className="HomePage" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <cl>
                <h1>
                    <img src={logo} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '20vh',
                    }} />
                </h1>
                <h2>
                    <Button variant="outlined" style = {{
                        minWidth: '20vh',
                    }}>Create Event</Button>
                </h2>
                <h3>
                    <Button variant="outlined" style = {{
                        minWidth: '20vh',
                    }}>Login</Button>
                </h3>
            </cl>
        </div>
    );
}

export default HomePage;
