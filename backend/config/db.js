const mongoose = require("mongoose");

const   MONGO_USERNAME = 'admin';
const   MONGO_PASSWORD = 'admin';

const MONGO_HOSTNAME = '
mongodb://127.0.0.1:27017/test';

const connect = () => {
    mongoose.connect(MONGO_HOSTNAME, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        auth: {
        user: MONGO_USERNAME,
        password: MONGO_PASSWORD
        }
    });
    mongoose.connection.on("error", err => {
        console.log(err);
        console.log(
        "MongoDB connection error. Please make sure MongoDB is running."
        );
        process.exit();
    });
    }