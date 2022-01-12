
var config = require('./config')

var mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const mongoUri = config.db;
        const mongoConfig = {
            useCreateIndex: true,
            useNewUrlParser: true,
            poolSize: 2,
            promiseLibrary: global.Promise
        };
 mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
        connect()

        function connect() {
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function () {
                console.log('db successfully connected')
            });
        }
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
};

module.exports = connectDB;