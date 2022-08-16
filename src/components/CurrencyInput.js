import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { CashCoin } from 'react-bootstrap-icons';
import { default as ReactCurrencyInput } from 'react-currency-input-field';

import validator from '../utilitaries/validator';

const CurrencyInput = ({ value, onChange, onKeyEnter, placeholder }) => {
    const onKeyDown = event => {
        if (validator.isFunction(onKeyEnter) && validator.isKeyEnter(event)) {
            event.preventDefault();
            onKeyEnter();
        }
    }

    return (
        <Form.Group className="mt-2">
            <Form.Label>Value</Form.Label>
            <InputGroup>
                <InputGroup.Text><CashCoin /></InputGroup.Text>
                <Form.Control
                    as={ReactCurrencyInput}
                    value={value || ""}
                    allowNegativeValue={false}
                    fixedDecimalLength={2}
                    onValueChange={onChange}
                    onKeyDown={onKeyDown.bind(this)}
                    placeholder={placeholder ?? "Informe the currency value"}
                />
            </InputGroup>
        </Form.Group>
    );
}

export default CurrencyInput;