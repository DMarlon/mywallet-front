import React from 'react';
import { Card, Table } from 'react-bootstrap';

import formatter from '../utilitaries/formatter';

const Statement = ({ statement }) => {

    return (
        <Card className="mt-2">
            <Card.Header className="bg-primary text-white text-center"><h3>Statement</h3></Card.Header>
            <Card.Body>
                <Card.Title>{`${statement?.wallet?.person?.name || ""} ${statement?.wallet?.person?.surname || ""}`}</Card.Title>
                <Card.Text><strong>Wallet</strong> {statement?.wallet?.number || ""}</Card.Text>
                {statement?.transactions &&
                    <Table className="mt-2">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th>Transaction</th>
                                <th>Date</th>
                                <th>Operation</th>
                                <th>Type</th>
                                <th>Value</th>

                            </tr>
                        </thead>
                        {statement?.transactions.map(transaction => (
                            <tbody>
                                <tr>
                                    <td>{transaction.number}</td>
                                    <td>{formatter.dateTimeToEnglishFormat(transaction.dateTime)}</td>
                                    <td>{transaction.operation}</td>
                                    <td>{transaction.type}</td>
                                    <td>{formatter.currencyUSD(transaction.value)}</td>

                                </tr>
                                {transaction.observation &&
                                    <tr>
                                        <td colSpan={5} className="px-4">
                                            <strong>Observation</strong><br />
                                            {transaction.observation}
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        ))}
                    </Table>
                }
            </Card.Body>
            <Card.Footer className="bg-primary text-white" style={{ textAlign: "right" }}><h3>Balance {formatter.currencyUSD(statement?.balance)}</h3></Card.Footer>
        </Card>
    );
}

export default Statement;