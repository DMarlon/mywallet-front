import React from 'react';
import MyRoutes from './routes/routes';
import Nav from 'react-bootstrap/Nav';

import "./App.css"
import "./Theme.scss"

function App() {
    return (
        <>
            <nav>
                <Nav className="bg-primary">
                    <Nav.Item>
                        <Nav.Link href="/" className="text-white"><strong>Home</strong></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/client" className="text-white"><strong>Client</strong></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/wallet" className="text-white"><strong>Wallet</strong></Nav.Link>
                    </Nav.Item>
                </Nav>
            </nav>
            <MyRoutes />
        </>
    );
}

export default App;
