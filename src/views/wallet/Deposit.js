import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';

import formatter from '../../utilitaries/formatter';
import validator from '../../utilitaries/validator';
import walletservice from '../../services/walletservice';
import { CashCoin, Wallet2 } from 'react-bootstrap-icons';

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
            console.log(exception.message);
        }
    };

    const validate = (deposit) => {
        if (validator.isNullOrEmpty(deposit.walletNumber))
            throw new Error("Wallet must be provided!");
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

                <Form.Group>
                    <Form.Label>Wallet</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><Wallet2 /></InputGroup.Text>
                        <Form.Control type="input" value={deposit?.walletNumber || ""} onChange={onChange("walletNumber")} placeholder="Informe the wallet number" />
                    </InputGroup>
                </Form.Group>


                <Form.Group className="mt-2">
                    <Form.Label>Value</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><CashCoin /></InputGroup.Text>
                        <Form.Control type="input" value={deposit?.value || ""} onChange={onChange("value")} placeholder="Informe the value to deposit" />
                    </InputGroup>
                </Form.Group>

                <div className="d-grid gap-2 mt-2">
                    <Button variant="primary" className="text-white" size="lg" onClick={save}>Deposit</Button>
                    <Button variant="secondary" size="lg" onClick={clean}>Clean</Button>
                    <Link to="/wallet" className="col-12">
                        <Button variant="secondary" size="lg" className="w-100">Back</Button>
                    </Link>
                </div>
            </Form>
        </Container>
    )
}

export default Deposit;