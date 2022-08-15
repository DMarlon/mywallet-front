import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { CashCoin } from 'react-bootstrap-icons';
import { default as ReactCurrencyInput } from 'react-currency-input-field';

const CurrencyInput = ({ value, onChange, placeholder }) => {

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
                    placeholder={placeholder ?? "Informe the currency value"}
                />
            </InputGroup>
        </Form.Group>
    );
}

export default CurrencyInput;