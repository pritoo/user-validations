const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const dotenv = require('dotenv');
const users = require('./routes/UserRoute');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
require('./Database/db');

app.use(express.json());
app.use('/api/users', users);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
})