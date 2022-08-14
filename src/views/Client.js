import React, { useState } from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import { PersonSquare } from 'react-bootstrap-icons';

import validator from '../utilitaries/validator';
import formatter from '../utilitaries/formatter';
import personservice from '../services/personservice';
import ButtonGroup from '../components/ButtonGroup';

const Client = () => {

    const emptyPerson = () => ({ name: "", surname: "" });

    const [person, setPerson] = useState(emptyPerson());

    const onChange = field => event => setPerson({ ...person, [field]: formatter.valueFromInput(event) });

    const save = async () => {
        try {
            validate(person);
            await personservice.create(person);
            window.alert(`Client ${person.name} ${person.surname} successfully registered!`);
            clean();
        } catch (exception) {
            console.log(exception.message ?? exception);
            window.alert(exception.message ?? "Error to create client!")
        }
    }

    const validate = (person) => {
        if (validator.isNullOrEmpty(person))
            throw new Error("Client information must be provided!");
        if (validator.isNullOrEmpty(person.name))
            throw new Error("Client name must be provided!");
        if (validator.isNullOrEmpty(person.surname))
            throw new Error("Client surname must be provided!");
    }

    const clean = () => {
        setPerson(emptyPerson());
    }

    return (
        <Container fluid>
            <h1>Client</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><PersonSquare /></InputGroup.Text>
                        <Form.Control type="input" value={person.name} onChange={onChange("name")} placeholder="Client first name" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>Surname</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><PersonSquare /></InputGroup.Text>
                        <Form.Control type="input" value={person.surname} onChange={onChange("surname")} placeholder="Client surname" />
                    </InputGroup>
                </Form.Group>

                <ButtonGroup labelAction="Save" onClickAction={save} onClickClean={clean} toLink="/" />
            </Form>
        </Container>
    )
};

export default Client;