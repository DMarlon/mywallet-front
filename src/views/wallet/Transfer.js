import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import WalletInput from '../../components/WalletInput';
import CurrencyInput from '../../components/CurrencyInput';
import ButtonGroup from '../../components/ButtonGroup';

import formatter from '../../utilitaries/formatter';
import validator from '../../utilitaries/validator';
import walletservice from '../../services/walletservice';

const Transfer = () => {
    const [transfer, setTransfer] = useState(null);

    const onChange = field => event => setTransfer({ ...transfer, [field]: formatter.valueFromInput(event) });

    const save = async () => {
        try {
            validate(transfer);
            const register = await walletservice.transfer(transfer)
            window.alert(`Transfer ${register.from.value} from wallet ${register.from.wallet.number} to wallet ${register.to.wallet.number} successfully registered!`);
            clean();
        } catch (exception) {
            console.log(exception.message ?? exception);
            window.alert(exception.message ?? "Error making transfer!")
        }
    };

    const validate = (transfer) => {
        if (validator.isNullOrEmpty(transfer))
            throw new Error("Transfer information must be provided!");
        if (validator.isNullOrEmpty(transfer.fromWalletNumber))
            throw new Error("Wallet from must be provided!");
        if (!validator.isUUIDValid(transfer.fromWalletNumber))
            throw new Error("Wallet from is not valid!");
        if (validator.isNullOrEmpty(transfer.toWalletNumber))
            throw new Error("Wallet to must be provided!");
        if (!validator.isUUIDValid(transfer.toWalletNumber))
            throw new Error("Wallet to is not valid!");
        if (validator.isNullOrEmpty(transfer.value))
            throw new Error("Value must be provided!");
    };

    const clean = () => {
        setTransfer(null);
    };

    return (
        <Container fluid>
            <h1>Transfer</h1>
            <Form>
                <WalletInput label="From Wallet" value={transfer?.fromWalletNumber} onChange={onChange("fromWalletNumber")} placeholder="Informe from wallet number"/>
                <WalletInput label="To Wallet" value={transfer?.toWalletNumber} onChange={onChange("toWalletNumber")} placeholder="Informe to wallet number"/>
                <CurrencyInput value={transfer?.value || ""} onChange={onChange("value")} placeholder={"Informe the value to transfer"} />
                <ButtonGroup labelAction="Transfer" onClickAction={save} onClickClean={clean} toLink="/wallet" />
            </Form>
        </Container>
    )
}

export default Transfer;