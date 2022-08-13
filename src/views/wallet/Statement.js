import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Wallet2 } from 'react-bootstrap-icons';

import walletservice from '../../services/walletservice';
import formatter from '../../utilitaries/formatter';

const Statement = () => {
    const [statement, setStatement] = useState(null);
    const [walletNumber, setWalletNumber] = useState(null);

    const onChange = event => setWalletNumber(formatter.valueFromInput(event))

    const getStatement = async () => {
        try {
            const statement = await walletservice.getStatement(walletNumber);
            setStatement(statement);
        } catch (exception) {
            console.log(exception)
        }
    }

    const clean = () => {
        setWalletNumber(null);
        setStatement(null);
    };

    return (
        <Container fluid>
            <h1>Statement</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Wallet</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><Wallet2/></InputGroup.Text>
                        <Form.Control type="input" value={walletNumber || ""} onChange={onChange} placeholder="Informe the wallet number" />
                    </InputGroup>
                </Form.Group>

                <div className="d-grid gap-2 mt-2">
                    <Button variant="primary" size="lg" className="text-white" onClick={getStatement}>Consult</Button>
                    <Button variant="secondary" size="lg" onClick={clean}>Clean</Button>
                    <Link to="/wallet" className="col-12">
                        <Button variant="secondary" size="lg" className="w-100">Back</Button>
                    </Link>
                </div>

                {statement &&
                    <Form>
                        <Row className="mt-2">
                            <Col>Client</Col><Col>{`${statement?.wallet?.person?.name || ""} ${statement?.wallet?.person?.surname || ""}`}</Col>
                        </Row>
                        <Row>
                            <Col>Wallet</Col><Col>{statement?.wallet?.number || ""}</Col>
                        </Row>

                        {statement?.transactions.map(transaction => (
                            <Row className="mt-2">
                                <Col>{transaction.number}</Col>
                                <Col>{transaction.dateTime}</Col>
                                <Col>{transaction.operation}</Col>
                                <Col>{transaction.type}</Col>
                                <Col>{transaction.value}</Col>
                                <Col>{transaction.observation}</Col>
                            </Row>
                        ))}

                        <Row>
                            <Col>Balance</Col><Col>{statement?.balance}</Col>
                        </Row>
                    </Form>
                }
            </Form>

        </Container>
    )
}

export default Statement;