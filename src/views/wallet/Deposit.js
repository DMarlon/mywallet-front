import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import WalletInput from '../../components/WalletInput';
import CurrencyInput from '../../components/CurrencyInput';
import ButtonGroup from '../../components/ButtonGroup';

import formatter from '../../utilitaries/formatter';
import validator from '../../utilitaries/validator';
import walletservice from '../../services/walletservice';

const Deposit = () => {
    const [deposit, setDeposit] = useState(null);

    const onChange = field => event => setDeposit({ ...deposit, [field]: formatter.valueFromInput(event) });

    const save = async () => {
        try {
            validate(deposit);
            const register = await walletservice.deposit(deposit)
            window.alert(`Deposit ${register.value} in wallet ${register.wallet.number} successfully registered!`);
            clean();
        } catch (exception) {
            console.log(exception.message ?? exception);
            window.alert(exception.message ?? "Error making deposit!")
        }
    };

    const validate = (deposit) => {
        if (validator.isNullOrEmpty(deposit))
            throw new Error("Deposit information must be provided!");
        if (validator.isNullOrEmpty(deposit.walletNumber))
            throw new Error("Wallet must be provided!");
        if (!validator.isUUIDValid(deposit.walletNumber))
            throw new Error("Wallet is not valid!");
        if (validator.isNullOrEmpty(deposit.value))
            throw new Error("Value must be provided!");
    };

    const clean = () => {
        setDeposit(null);
    };

    return (
        <Container fluid>
            <h1>Deposit</h1>
            <Form>
                <WalletInput value={deposit?.walletNumber} onChange={onChange("walletNumber")} onKeyEnter={save} />
                <CurrencyInput value={deposit?.value} onChange={onChange("value")} onKeyEnter={save} placeholder={"Informe the value to deposit"} />
                <ButtonGroup labelAction="Deposit" onClickAction={save} onClickClean={clean} toLink="/wallet" />
            </Form>
        </Container>
    )
}

export default Deposit;