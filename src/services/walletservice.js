import { requester } from "../plugin/requester";
import pathapi from "../utilitaries/pathapi";

const walletservice = {
    async create(wallet) {    
        try {
            const { data } = await requester.post(pathapi.wallet.create(), wallet);
            return data;
        } catch (exception) {
            throw new Error(exception.message)
        }    
    },

    async deposit(deposit) {    
        try {
            const { data } = await requester.put(pathapi.wallet.deposit(), deposit);
            return data;
        } catch (exception) {
            throw new Error(exception.message)
        }    
    },

    async withdraw(withdraw) {    
        try {
            const { data } = await requester.put(pathapi.wallet.withdraw(), withdraw);
            return data;
        } catch (exception) {
            throw new Error(exception.message)
        }    
    },

    async transfer(transfer) {    
        try {
            const { data } = await requester.put(pathapi.wallet.transfer(), transfer);
            return data;
        } catch (exception) {
            throw new Error(exception.message)
        }    
    },

    async getBalance(walletNumber) {    
        try {
            const { data } = await requester.get(`/wallet/${walletNumber}/balance`);
            return data;
        } catch (exception) {
            throw new Error(exception.message)
        }    
    },

    async getStatement(walletNumber) {    
        try {
            const { data } = await requester.get(`/wallet/${walletNumber}/transaction`);
            return data;
        } catch (exception) {
            throw new Error(exception.message)
        }    
    }
}

export default walletservice