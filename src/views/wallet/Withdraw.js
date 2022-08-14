import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import WalletInput from '../../components/WalletInput';
import CurrencyInput from '../../components/CurrencyInput';
import ButtonGroup from '../../components/ButtonGroup';

import formatter from '../../utilitaries/formatter';
import validator from '../../utilitaries/validator';
import walletservice from '../../services/walletservice';

const Withdraw = () => {
    const [withdraw, setWithdraw] = useState(null);

    const onChange = field => event => setWithdraw({ ...withdraw, [field]: formatter.valueFromInput(event) });

    const save = async () => {
        try {
            validate(withdraw);
            const register = await walletservice.withdraw(withdraw)
            window.alert(`Withdraw ${register.value} in wallet ${register.wallet.number} successfully registered!`);
            clean();
        } catch (exception) {
            console.log(exception.message ?? exception);
            window.alert(exception.message ?? "Error making withdraw!")
        }
    };

    const validate = (withdraw) => {
        if (validator.isNullOrEmpty(withdraw))
            throw new Error("Withdraw informations must be provided!");
        if (validator.isNullOrEmpty(withdraw.walletNumber))
            throw new Error("Wallet must be provided!");
        if (!validator.isUUIDValid(withdraw.walletNumber))
            throw new Error("Wallet is not valid!");
        if (validator.isNullOrEmpty(withdraw.value))
            throw new Error("Value must be provided!");
    };

    const clean = () => {
        setWithdraw(null);
    };

    return (
        <Container fluid>
            <h1>Withdraw</h1>
            <Form>
                <WalletInput value={withdraw?.walletNumber} onChange={onChange("walletNumber")} />
                <CurrencyInput value={withdraw?.value} onChange={onChange("value")} placeholder={"Informe the value to withdraw"} />
                <ButtonGroup labelAction="Withdraw" onClickAction={save} onClickClean={clean} toLink="/wallet" />
            </Form>
        </Container>
    )
}

export default Withdraw;