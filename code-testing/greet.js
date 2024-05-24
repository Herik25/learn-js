function greet(name, logger) {
    logger.log(`hello ${name}`);
    return `hello ${name}`;
}

module.exports = greet