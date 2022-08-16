import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import WalletInput from '../../components/WalletInput';
import ButtonGroup from '../../components/ButtonGroup';
import Statement from '../../components/Statement';

import formatter from '../../utilitaries/formatter';
import validator from '../../utilitaries/validator';
import walletservice from '../../services/walletservice';

const Balance = () => {
    const [balance, setBalance] = useState(null);
    const [walletNumber, setWalletNumber] = useState(null);

    const onChange = event => setWalletNumber(formatter.valueFromInput(event))

    const getBalance = async () => {
        try {
            validate(walletNumber)
            const balance = await walletservice.getBalance(walletNumber);
            setBalance(balance);
        } catch (exception) {
            console.log(exception.message ?? exception)
            window.alert(exception.message ?? "Error to show the balance!")
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
        setBalance(null);
    };

    return (
        <Container fluid>
            <h1>Balance</h1>
            <Form>
                <WalletInput value={walletNumber} onChange={onChange} onKeyEnter={getBalance} />
                <ButtonGroup labelAction="Consult" onClickAction={getBalance} onClickClean={clean} toLink="/wallet" />
                {balance && <Statement statement={balance} />}
            </Form>

        </Container>
    )
}

export default Balance;