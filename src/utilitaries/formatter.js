const formatter = {
    dateTimeToEnglishFormat(dateTime) {
        var timestamp = Date.parse(dateTime);
        if (isNaN(timestamp))
            throw Error(`${dateTime} is not a valid number to be formatted!`)

        return new Date(timestamp).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
    },

    valueFromInput(input) {
        return input && input.target ? input.target.value || input.target.checked || '' : input
    },

    currencyRemoveDecimalSeparators(currency) {
        return currency && (currency + "").replace(new RegExp("[^0-9]", ["g"]), "")
    },

    currencyUSD(currency) {
        const formatter = new Intl.NumberFormat('en-US', {
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        const value = parseInt(this.currencyRemoveDecimalSeparators(currency))

        if (Number.isNaN(value))
            throw Error(`${value} is not a valid number to be formatted!`)

        return formatter.format((value / 100).toFixed(2))
    }

}

export default formatter;