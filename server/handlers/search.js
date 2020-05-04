require("dotenv").config({path: "../.env"});
const axios = require("axios");

exports.searchMovies = async function(req, res, next){
    const   APIkey = process.env.API_KEY,
            URL = "https://api.themoviedb.org/3/search/movie?api_key={",
            query = req.body.query;
    axios.get(`${URL}${APIkey}}&query=${query}`)
    .then( data => {
        return res.status(200).json(data);
    })
    .catch(err => {
        return next(err)
    })
}

