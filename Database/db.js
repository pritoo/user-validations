const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DataBase = process.env.DB_URI;

mongoose.connect(DataBase)
.then(() => console.log("Database Connection Successful..."))
.catch((error) => console.log(error));