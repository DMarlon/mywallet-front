import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import MyRoutes from './routes/routes';

import "./App.css"
import "./Theme.scss"

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Nav className="bg-primary">
                    <Nav.Item>
                        <Link to="/" className="nav-link text-white"><strong>Home</strong></Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/client" className="nav-link text-white"><strong>Client</strong></Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/wallet" className="nav-link text-white"><strong>Wallet</strong></Link>
                    </Nav.Item>
                </Nav>
            </nav>
            <main className="main">
                <div>
                    <MyRoutes />
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
