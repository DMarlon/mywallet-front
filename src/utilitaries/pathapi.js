const pathapi = {
    person: {
        create: () => "/person",
        autocomplete: (term) => `/person?term=${term}`
    },
    wallet: {
        list: () => "/wallet",
        create: () => "/wallet",
        deposit: () => "/wallet/deposit",
        withdraw: () => "/wallet/withdraw",
        transfer: () => "/wallet/transfer",
        balance: (number) => `/wallet/ ${number}/balance`,
        statement: (number) => `/wallet/ ${number}/transaction`
    }
}

export default pathapi;

