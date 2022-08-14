import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import AutoCompleteInput from '../../components/AutoCompleteInput';
import ButtonGroup from '../../components/ButtonGroup';

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
            console.log(exception.message ?? exception);
            window.alert(exception.message ?? "Error to search person!")
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
            console.log(exception.message ?? exception);
            window.alert(exception.message ?? "Error to create wallet!")
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
                <AutoCompleteInput
                    label={"Client"}
                    isLoading={isLoading}
                    labelKey={option => `${option.name} ${option.surname}`}
                    onChange={selected}
                    onSearch={term => autocomplete(term)}
                    options={options}
                    placeholder="Search client..."
                    renderMenuItemChildren={(option) => (<span>{`${option.name}  ${option.surname}`}</span>)}
                />
                <ButtonGroup labelAction="Create" onClickAction={save} onClickClean={clean} toLink="/wallet" />
            </Form>
        </Container>
    )
}

export default Create;