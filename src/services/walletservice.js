import { requester } from "../plugin/requester";
import pathapi from "../utilitaries/pathapi";
import formatter from "../utilitaries/formatter";

const removeDecimalSeparatorsInValue = (object) => {
    return { ...object, value: formatter.currencyRemoveDecimalSeparators(object?.value) };
}

const formatCurrencyInValue = (object) => {
    return { ...object, value: formatter.currencyUSD(object?.value) };
}

const walletservice = {
    async list() {
        try {
            const { data } = await requester.get(pathapi.wallet.list());
            return data;
        } catch (exception) {
            throw new Error(exception.message)
        }
    },

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
            const { data } = await requester.put(pathapi.wallet.deposit(), removeDecimalSeparatorsInValue(deposit));
            return formatCurrencyInValue(data);
        } catch (exception) {
            throw new Error(exception.message)
        }
    },

    async withdraw(withdraw) {
        try {
            const { data } = await requester.put(pathapi.wallet.withdraw(), removeDecimalSeparatorsInValue(withdraw));
            return formatCurrencyInValue(data);
        } catch (exception) {
            throw new Error(exception.message)
        }
    },

    async transfer(transfer) {
        try {
            const { data } = await requester.put(pathapi.wallet.transfer(), removeDecimalSeparatorsInValue(transfer));
            return { from: formatCurrencyInValue(data?.from), to: formatCurrencyInValue(data?.to) };
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
            const { data } = await requester.get(`/wallet/${walletNumber}/statement`);
            return data;
        } catch (exception) {
            throw new Error(exception.message)
        }
    }
}

export default walletservice