const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const session = require('express-session');
let RedisStore = require('connect-redis')(session);

const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD, REDIS_IP, REDIS_PORT, REDIS_SECRET } = require('./config/config');

const postRouter = require('./routes/postRoute');
const userRouter = require('./routes/userRoute');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            'title': 'My APIs',
            'version': '1.0'
        }
    },
    apis: ['index.js','./routes/postRoute.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();

mongoose
.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
.then(() => console.log('MongoDb Connected !!!'))
.catch((e) => console.log(e));

let redisClient = redis.createClient({
    url: `redis://${REDIS_IP}:${REDIS_PORT}`,
    legacyMode : true
});

// const client = redis.createClient({ host: 'redis', port: 6379 });

(async () => {
    try {
        redisClient.connect();
        console.log('Redis connected !!!');
    } catch (err) {
        console.error(err);
    }
})()

// app.set('​trust proxy​', 1);

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: `${REDIS_SECRET}`,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
    }
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/', (req,res) => {
    res.send('<h1>Express App 101</h1>');
    console.log('Yeah !!')
});

app.use("/api/v1/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use("/api/v1/post", postRouter);
app.use("/api/v1/user", userRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Express App listening on port ${port}`));