import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { CashCoin, Wallet2 } from 'react-bootstrap-icons';

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
            console.log(exception.message);
        }
    };

    const validate = (transfer) => {
        if (validator.isNullOrEmpty(transfer.fromWalletNumber))
            throw new Error("Wallet from must be provided!");
        if (validator.isNullOrEmpty(transfer.toWalletNumber))
            throw new Error("Wallet to must be provided!");
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
                <Form.Group>
                    <Form.Label>From Wallet</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><Wallet2 /></InputGroup.Text>
                        <Form.Control type="input" value={transfer?.fromWalletNumber || ""} onChange={onChange("fromWalletNumber")} placeholder="Informe from wallet number" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>To Wallet</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><Wallet2 /></InputGroup.Text>
                        <Form.Control type="input" value={transfer?.toWalletNumber || ""} onChange={onChange("toWalletNumber")} placeholder="Informe to wallet number" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Value</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><CashCoin /></InputGroup.Text>
                        <Form.Control type="input" value={transfer?.value || ""} onChange={onChange("value")} placeholder="Informe the value to transfer" />
                    </InputGroup>
                </Form.Group>

                <div className="d-grid gap-2 mt-2">
                    <Button variant="primary" size="lg" className="text-white" onClick={save}>Transfer</Button>
                    <Button variant="secondary" size="lg" onClick={clean}>Clean</Button>
                    <Link to="/wallet" className="col-12">
                        <Button variant="secondary" size="lg" className="w-100">Back</Button>
                    </Link>
                </div>
            </Form>
        </Container>
    )
}

export default Transfer;