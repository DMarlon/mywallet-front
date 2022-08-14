import React, { useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import ButtonGroup from '../../components/ButtonGroup';

import walletservice from '../../services/walletservice';

const List = () => {
    const [wallets, setWallets] = useState(null);

    const findAll = async () => {
        try {
            const wallets = await walletservice.list();
            setWallets(wallets);
        } catch (exception) {
            console.log(exception.message ?? exception)
            window.alert(exception.message ?? "Error to list wallets!")
        }
    }

    const clean = () => {
        setWallets(null);
    }

    return (
        <Container fluid>
            <h1>Wallets</h1>
            <Form>
                <ButtonGroup labelAction="Load" onClickAction={findAll} onClickClean={clean} toLink="/wallet" />
                {wallets &&
                    <Table striped className="mt-2">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th>Client</th>
                                <th>Wallet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wallets.map(wallet => (
                                <tr>
                                    <td>{`${wallet?.person?.name} ${wallet?.person?.surname}`}</td>
                                    <td>{wallet?.number ?? ""}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                }
            </Form>

        </Container>
    )
}

export default List;