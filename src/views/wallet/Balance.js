import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Wallet2 } from 'react-bootstrap-icons';

import walletservice from '../../services/walletservice';
import formatter from '../../utilitaries/formatter';

const Balance = () => {
    const [balance, setBalance] = useState(null);
    const [walletNumber, setWalletNumber] = useState(null);

    const onChange = event => setWalletNumber(formatter.valueFromInput(event))

    const getBalance = async () => {
        try {
            const balance = await walletservice.getBalance(walletNumber);
            setBalance(balance);
        } catch (exception) {
            console.log(exception)
        }
    }

    const clean = () => {
        setWalletNumber(null);
        setBalance(null);
    };

    return (
        <Container fluid>
            <h1>Balance</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Wallet</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><Wallet2/></InputGroup.Text>
                        <Form.Control type="input" value={walletNumber || ""} onChange={onChange} placeholder="Informe the wallet number" />
                    </InputGroup>
                </Form.Group>

                <div className="d-grid gap-2 mt-2">
                    <Button variant="primary" size="lg" className="text-white" onClick={getBalance}>Consult</Button>
                    <Button variant="secondary" size="lg" onClick={clean}>Clean</Button>
                    <Link to="/wallet" className="col-12">
                        <Button variant="secondary" size="lg" className="w-100">Back</Button>
                    </Link>
                </div>

                {balance &&
                    <Form>
                        <Row className="mt-2">
                            <Col>Client</Col>
                            <Col>Wallet</Col>
                            <Col>Balance</Col>
                        </Row>
                        <Row className="mt-2">
                            <Col>{`${balance?.wallet?.person?.name || ""} ${balance?.wallet?.person?.surname || ""}`}</Col>
                            <Col>{balance?.wallet?.number || ""}</Col>
                            <Col>{balance?.balance || ""}</Col>
                        </Row>
                    </Form>
                }
            </Form>

        </Container>
    )
}

export default Balance;