'use strict';

const bluebird = require('bluebird');
const express = require('express');
const app = express();
const redis = require('redis');
const client = redis.createClient({ host: 'redis' });
const PORT = 8080;

bluebird.promisifyAll(redis.RedisClient.prototype);

app.get('/', (req, res) => {
  client.incrAsync('hits').then((result) => {
    res.send('Hello everyone! I have processed ' + result + ' requests.\n');
  });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
