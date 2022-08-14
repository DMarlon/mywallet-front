const formatter = {
    dateTimeToEnglishFormat(dateTime) {
        return dateTime ? dateTime.substring(0, 19).replace(/^(\d{1,4})-(\d{1,2})-(\d{1,2})T(\d{1,2}):(\d{1,2}):(\d{1,2})$/, "$3/$2/$1 $4:$5:$6") : "";
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