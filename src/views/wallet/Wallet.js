import React from 'react';
import { Link } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import AppName from '../../components/AppName';

const Wallet = () => {
    return (
        <Container fluid>
            <h1><AppName/></h1>
            <div className="d-grid gap-2 mt-2">
                <Link to="/wallet/create" className="col-12">
                    <Button variant="primary" size="lg" className="text-white w-100">Create</Button>
                </Link>
                <Link to="/wallet/deposit" className="col-12">
                    <Button variant="primary" size="lg" className="text-white w-100">Deposit</Button>
                </Link>
                <Link to="/wallet/withdraw" className="col-12">
                    <Button variant="primary" size="lg" className="text-white w-100">Withdraw</Button>
                </Link>
                <Link to="/wallet/transfer" className="col-12">
                    <Button variant="primary" size="lg" className="text-white w-100">Transfer</Button>
                </Link>
                <Link to="/wallet/balance" className="col-12">
                    <Button variant="primary" size="lg" className="text-white w-100">Balance</Button>
                </Link>
                <Link to="/wallet/statement" className="col-12">
                    <Button variant="primary" size="lg" className="text-white w-100">Statement</Button>
                </Link>

                <Link to="/" className="col-12">
                    <Button variant="secondary" size="lg" className="text-white w-100">Back</Button>
                </Link>
            </div>
        </Container>

    );
}

export default Wallet;