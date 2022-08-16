import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Wallet2 } from 'react-bootstrap-icons';
import reactInputMask from 'react-input-mask';

import validator from '../utilitaries/validator';

const uuidMask = "********-****-****-****-************";

const WalletInput = ({ label, value, placeholder, onChange, onKeyEnter }) => {

    const onKeyDown = event => {
        if (validator.isFunction(onKeyEnter) && validator.isKeyEnter(event)) {
            event.preventDefault();
            onKeyEnter();
        }
    }

    return (
        <Form.Group className="mt-2">
            <Form.Label>{label ?? "Wallet"}</Form.Label>
            <InputGroup>
                <InputGroup.Text><Wallet2 /></InputGroup.Text>
                <Form.Control
                    as={reactInputMask}
                    mask={uuidMask}
                    onKeyDown={onKeyDown}
                    value={value || ""}
                    onChange={onChange}
                    placeholder={placeholder ?? "Informe the wallet number"}
                />
            </InputGroup>
        </Form.Group>
    );
}

export default WalletInput;