import express from 'express';
import bodyParser from 'body-parser';
import dbConfig from '../config/database.config.js';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
