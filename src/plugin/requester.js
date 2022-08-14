import axios from "axios";
import httpstatus from "http-status-codes";

const requester = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 60 * 1000,
});

requester.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        if (error.response) {
            if (error.response.status === httpstatus.NOT_FOUND)
                error.message =  "Resource not found!";
            else if (error.response.status === httpstatus.FORBIDDEN) {
                if (error.response.data && error.response.data.message)
                    error.message = error.response.data.message
                else
                    error.message = "Could not access requested resource!";
            }
            else if (error.response.data && error.response.data.message)
                error.message =  error.response.data.message;
            else
                error.message =  "Error in requested operation!";
        }
        else if (error.message) {
            if (error.message === "Network Error")
                error.message = "Could not access the server!";
        }
        else
            error.message = "Error in requested operation!";

        console.log(error.message);
        return Promise.reject(error);
    }
);

export { requester };