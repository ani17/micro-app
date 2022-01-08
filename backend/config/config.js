module.exports = {
    MONGO_INITDB_ROOT_USERNAME: process.env.MONGO_INITDB_ROOT_USERNAME,
    MONGO_INITDB_ROOT_PASSWORD: process.env.MONGO_INITDB_ROOT_PASSWORD,
    MONGO_IP : process.env.MONGO_IP || "mongo",
    MONGO_PORT : process.env.MONGO_PORT || 27017,
    MONGO_USER : process.env.MONGO_USER,
    MONGO_PASSWORD : process.env.MONGO_PASSWORD,
    REDIS_IP: process.env.REDIS_IP || "redis",
    REDIS_PORT: process.env.REDIS_PORT || 6379,
    REDIS_SECRET : process.env.REDIS_SECRET
}