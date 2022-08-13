import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Container, Form } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import validator from '../../utilitaries/validator';
import personservice from '../../services/personservice';
import walletservice from '../../services/walletservice';

const Create = () => {
    const [wallet, setWallet] = useState(null);
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const autocomplete = async (term) => {
        try {
            setIsLoading(true);
            setOptions(await personservice.autocomplete(term));
        } catch (exception) {
            console.log(exception.message);
        } finally {
            setIsLoading(false);
        }
    };

    const selected = (person) => {
        if (validator.isNullOrEmpty(person))
            setWallet(null);

        setWallet({ person: person[0] });
    }

    const save = async () => {
        try {
            validate(wallet);
            const created = await walletservice.create(wallet)
            window.alert(`Client ${created.person.name} ${created.person.surname} wallet ${created.number} successfully registered!`);
            clean();
        } catch (exception) {
            console.log(exception.message);
        }
    };

    const validate = (wallet) => {
        if (validator.isNullOrEmpty(wallet?.person?.id))
            throw new Error("Client must be provided!");
    };

    const clean = () => {
        setWallet(null);
    };

    return (
        <Container fluid>
            <h1>Create</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Client</Form.Label>
                    <AsyncTypeahead
                        id="async-example"
                        isLoading={isLoading}
                        labelKey={option => `${option.name} ${option.surname}`}
                        minLength={2}
                        onChange={selected}
                        onSearch={term => autocomplete(term)}
                        options={options}
                        placeholder="Search client..."
                        renderMenuItemChildren={(option) => (<span>{`${option.name}  ${option.surname}`}</span>)}
                    />
                </Form.Group>

                <div className="d-grid gap-2 mt-2">
                    <Button variant="primary" size="lg" className="text-white" onClick={save}>Create</Button>
                    <Button variant="secondary" size="lg" onClick={clean}>Clean</Button>
                    <Link to="/wallet" className="col-12">
                        <Button variant="secondary" size="lg" className="w-100">Back</Button>
                    </Link>

                </div>
            </Form>
        </Container>
    )
}

export default Create;