
import React, { useState } from 'react';
import { Container, Form, Modal, Table } from 'react-bootstrap';
import ButtonGroup from '../../components/ButtonGroup';

import walletservice from '../../services/walletservice';

const List = () => {
    const [wallets, setWallets] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const findAll = async () => {
        try {
            const wallets = await walletservice.list();
            setWallets(wallets);
            setShowModal(true);
        } catch (exception) {
            console.log(exception.message ?? exception)
            window.alert(exception.message ?? "Error to list wallets!")
        }
    }

    return (
        <Container fluid>
            <h1>Wallets</h1>
            <Form>
                <ButtonGroup labelAction="Load" onClickAction={findAll} toLink="/wallet" />
                <Modal fullscreen={true} show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <Table striped className="mt-2">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th>Client</th>
                                    <th>Wallet</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wallets?.map((wallet, index) => (
                                    <tr key={index}>
                                        <td>{`${wallet?.person?.name} ${wallet?.person?.surname}`}</td>
                                        <td>{wallet?.number ?? ""}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>

            </Form>

        </Container>
    )
}

export default List;