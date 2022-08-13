import { requester } from "../plugin/requester";
import pathapi from "../utilitaries/pathapi";

const personservice = {
    async create(person) {    
        try {
            const { data } = await requester.post(pathapi.person.create(), person);
            return data;
        } catch (exception) {
            throw new Error(exception.message)
        }    
    },

    async autocomplete(term) {    
        try {
            const { data } = await requester.get(pathapi.person.autocomplete(term));
            return data;
        } catch (exception) {
            throw new Error(exception.message)
        }    
    }
}

export default personservice