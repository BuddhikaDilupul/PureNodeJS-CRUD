const winston = require('winston');

const logger =
    winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            winston.format.prettyPrint()),
        transports: [
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'combined.log' }),
        ],
    });


const entryLogger = (req, res, next) => {
    const startTime = new Date();

    res.on('finish', () => {
        const endTime = new Date();
        const responseTime = endTime - startTime;

        logger.log('info', { request: `[${req.method}] ${req.url} - ${res.statusCode} (${responseTime}ms)` });
        console.log({ request: `[${req.method}] ${req.url} - ${res.statusCode} (${responseTime}ms)` });

    });

    next();
};

const defaultLogger = (results) => {
    logger.log(results.result.level, { message: results.result.message }, { text: results.result.text });

};

module.exports = { entryLogger, defaultLogger }