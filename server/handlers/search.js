require("dotenv").config({path: "../.env"});
const axios = require("axios");

exports.searchMovies = async function(req, res, next){
    const   APIkey = process.env.API_KEY,
            query = req.body.query;
            page = req.body.page;
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${query}&page=${page}`
    axios.get(URL)
    .then(response => {
        return res.status(200).send(response.data);
    })
    .catch(err => {
        return next(err)
    })
}

