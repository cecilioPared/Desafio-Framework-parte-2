
import logger from "../utils/loggerHandler.js"

export const validarRecursoMiddleware = (req,res, next) => {
    logger.info(`${req.method} ${req.url}`);    
    next()  
}

export const notFoundURl = ('*', (req, res) => {
    logger.warn(
          `Ruta: ${req.originalUrl} - Metodo: ${req.method} - Ruta inexistente.`
    );
    res.status(404).send(
          `Ruta: ${req.originalUrl} - Metodo: ${req.method} - Ruta inexistente.`
    );
});
