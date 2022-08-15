import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Wallet2 } from 'react-bootstrap-icons';
import reactInputMask from 'react-input-mask';

const WalletInput = ({ label, value, placeholder, onChange }) => {

    const uuidMask = () => {
        return "********-****-****-****-************";
    }

    return (
        <Form.Group>
            <Form.Label>{label ?? "Wallet"}</Form.Label>
            <InputGroup>
                <InputGroup.Text><Wallet2 /></InputGroup.Text>
                <Form.Control
                    as={reactInputMask}
                    mask={uuidMask()}
                    value={value || ""}
                    onChange={onChange}
                    placeholder={placeholder ?? "Informe the wallet number"}
                />
            </InputGroup>
        </Form.Group>
    );
}

export default WalletInput;