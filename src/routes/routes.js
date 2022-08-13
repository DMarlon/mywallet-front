import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../views/Home";
import Client from "../views/Client";
import Wallet from "../views/wallet/Wallet";
import Create from "../views/wallet/Create";
import Deposit from "../views/wallet/Deposit";
import Withdraw from "../views/wallet/Withdraw";
import Transfer from "../views/wallet/Transfer";
import Balance from "../views/wallet/Balance";
import Statement from "../views/wallet/Statement";

const MyRoutes = () => {
    return (
        <main className="main">
            <div className="main-container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="client" element={<Client />} />
                        <Route path="wallet" element={<Wallet />} />
                        <Route path="wallet/create" element={<Create />} />
                        <Route path="wallet/deposit" element={<Deposit />} />
                        <Route path="wallet/withdraw" element={<Withdraw />} />
                        <Route path="wallet/transfer" element={<Transfer />} />
                        <Route path="wallet/balance" element={<Balance />} />
                        <Route path="wallet/statement" element={<Statement />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </main>
    )
}

export default MyRoutes;