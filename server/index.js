require("dotenv").config();

const   express                         = require("express"),
        bodyParser                      = require("body-parser"),
        errorHandler                    = require("./handlers/error"),
        cors                            = require("cors"),
        authRoutes                      = require("./routes/auth"),
        {loginRequired, correctUser}    = require("./middleware/auth");

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(bodyParser.json());

//Auth Routes
app.use("/api/auth", authRoutes)

app.use((req, res, next) => {
    let err = new Error("Not Found")
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Connected on ${PORT}`))