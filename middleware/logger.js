const logger = (req, res, next) => {
    console.log(
        `logger middle ware, method => ${req.method}, user => ${req.get('host')}`);
    next();
}
module.exports = logger;