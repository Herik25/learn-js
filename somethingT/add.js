async function getUser(database) {
    return await database.query()
}

module.exports = getUser