const validator = {
    isNullOrEmpty(element) {
        return element === null || typeof element === 'undefined' || element === '' || (Array.isArray(element) && element.length === 0)
    },

    isUUIDValid(uuid) {
        return uuid && new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$", ["i"]).test((uuid + ""))
    }
};

export default validator;