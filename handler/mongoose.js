const { mongooseConnectionString } = require("./config.json");
const mongoose = require("mongoose");

module.exports = () => {
    if (!mongooseConnectionString) return;

    mongoose.connect(mongooseConnectionString, {
        useFindAndModify: true,
        useUnifiedTopology: true,
    }).then(console.log('the bot have been successfuly connected to the database'))
}; 