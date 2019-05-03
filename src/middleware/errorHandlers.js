import * as ErrorHandler from "../utils/ErrorHandler";

const handle404Error = (router) => {
    router.use((req, res) => {
        ErrorHandler.notFoundError();
    });
};

const handleClientErrors = (router) => {
    router.use((err, req, res, next) => {
        ErrorHandler.clientError(err, res, next);
    });
};

const handleServerErrors = (router) => {
    router.use((err, req, res, next) => {
        ErrorHandler.serverError(err, res, next);
    });
};

export default [handle404Error, handleClientErrors, handleServerErrors];