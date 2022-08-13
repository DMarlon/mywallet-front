import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { CashCoin, Wallet2 } from 'react-bootstrap-icons';

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
            console.log(exception.message);
        }
    };

    const validate = (withdraw) => {
        if (validator.isNullOrEmpty(withdraw.walletNumber))
            throw new Error("Wallet must be provided!");
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
                <Form.Group>
                    <Form.Label>Wallet</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><Wallet2 /></InputGroup.Text>
                        <Form.Control type="input" value={withdraw?.walletNumber || ""} onChange={onChange("walletNumber")} placeholder="Informe the wallet number" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Value</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><CashCoin /></InputGroup.Text>
                        <Form.Control type="input" value={withdraw?.value || ""} onChange={onChange("value")} placeholder="Informe the value to withdraw" />
                    </InputGroup>
                </Form.Group>

                <div className="d-grid gap-2 mt-2">
                    <Button variant="primary" size="lg" className="text-white" onClick={save}>Withdraw</Button>
                    <Button variant="secondary" size="lg" onClick={clean}>Clean</Button>
                    <Link to="/wallet" className="col-12">
                        <Button variant="secondary" size="lg" className="w-100">Back</Button>
                    </Link>
                </div>
            </Form>
        </Container>
    )
}

export default Withdraw;