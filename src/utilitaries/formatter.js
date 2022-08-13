const formatter = {
    dateTimeToEnglishFormat(dateTime) {
        return dateTime ? dateTime.substring(0, 19).replace(/^(\d{1,4})-(\d{1,2})-(\d{1,2})T(\d{1,2}):(\d{1,2}):(\d{1,2})$/, "$3/$2/$1 $4:$5:$6") : "";
    },
    
    valueFromInput(input) {
        return input && input.target ? input.target.value || input.target.checked || '' : input
    }
}

export default formatter;