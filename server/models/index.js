const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/next-flick", {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

module.exports.User = require("./user");
module.exports.Movie = require("./movie");