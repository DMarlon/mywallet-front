const validator = {
    isNullOrEmpty(element) {
        return element === null || typeof element === 'undefined' || element === '' || (Array.isArray(element) && element.length === 0)
    }
};

export default validator;