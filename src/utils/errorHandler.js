"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.ConnectionError = void 0;
class ConnectionError extends Error {
    constructor(message, status) {
        super(`${message}`);
        this.name = "ConnectionError";
        this.status = status;
    }
}
exports.ConnectionError = ConnectionError;
const errorHandler = (error, customMessage = "") => {
    if (error instanceof ConnectionError) {
        console.log(`Connection error.  HTTP response status code ${error.status}.`);
    }
    console.error(customMessage, error);
    //return new Error(customMessage);
    // If an error is being passed in as an argument, an error is thrown.  This function is invoked on being caught, so no need to return an Error to go up the chain.
};
exports.errorHandler = errorHandler;
