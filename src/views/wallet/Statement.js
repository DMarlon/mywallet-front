import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import WalletInput from '../../components/WalletInput';
import ButtonGroup from '../../components/ButtonGroup';

import validator from '../../utilitaries/validator';
import formatter from '../../utilitaries/formatter';
import walletservice from '../../services/walletservice';

const Statement = () => {
    const [statement, setStatement] = useState(null);
    const [walletNumber, setWalletNumber] = useState(null);

    const onChange = event => setWalletNumber(formatter.valueFromInput(event))

    const getStatement = async () => {
        try {
            validate(walletNumber)
            const statement = await walletservice.getStatement(walletNumber);
            setStatement(statement);
        } catch (exception) {
            console.log(exception.message ?? exception)
            window.alert(exception.message ?? "Error to show statement!")
        }
    }

    const validate = (walletNumber) => {
        if (validator.isNullOrEmpty(walletNumber))
            throw new Error("Wallet number must be provided!");
        if (!validator.isUUIDValid(walletNumber))
            throw new Error("Wallet number is not valid!");
    };


    const clean = () => {
        setWalletNumber(null);
        setStatement(null);
    };

    return (
        <Container fluid>
            <h1>Statement</h1>
            <Form>
                <WalletInput value={walletNumber} onChange={onChange} />
                <ButtonGroup labelAction="Consult" onClickAction={getStatement} onClickClean={clean} toLink="/wallet" />

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