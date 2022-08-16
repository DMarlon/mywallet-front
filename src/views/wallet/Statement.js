import React, { useState } from 'react';
import { Container, Form, Modal } from 'react-bootstrap';
import { default as StatementTicket } from '../../components/Statement';

import WalletInput from '../../components/WalletInput';
import ButtonGroup from '../../components/ButtonGroup';

import validator from '../../utilitaries/validator';
import formatter from '../../utilitaries/formatter';
import walletservice from '../../services/walletservice';

const Statement = () => {
    const [statement, setStatement] = useState(null);
    const [walletNumber, setWalletNumber] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const onChange = event => setWalletNumber(formatter.valueFromInput(event))

    const getStatement = async () => {
        try {
            validate(walletNumber)
            const statement = await walletservice.getStatement(walletNumber);
            setStatement(statement);
            setShowModal(true);
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
                <WalletInput value={walletNumber} onChange={onChange} onKeyEnter={getStatement} />
                <ButtonGroup labelAction="Consult" onClickAction={getStatement} onClickClean={clean} toLink="/wallet" />

                <Modal fullscreen={true} show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body><StatementTicket statement={statement} /></Modal.Body>
                </Modal>
            </Form>

        </Container>
    )
}

export default Statement;