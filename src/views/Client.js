import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { PersonSquare } from 'react-bootstrap-icons';

import validator from '../utilitaries/validator';
import formatter from '../utilitaries/formatter';
import personservice from '../services/personservice';

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
            console.log(exception.message);
        }
    }

    const validate = (person) => {
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

                <div className="d-grid gap-2 mt-2">
                    <Button variant="primary" size="lg" className="text-white" onClick={save}>Save</Button>
                    <Button variant="secondary" size="lg" onClick={clean}>Clean</Button>
                    <Link to="/" className="col-12">
                        <Button variant="secondary" size="lg" className="w-100">Back</Button>
                    </Link>
                </div>
            </Form>
        </Container>
    )
};

export default Client;