const db = require("../models/index");

exports.createMovie = async function(req, res, next){
    try{
        let movie = await db.Movie.create({
            info: req.body.info,
            watched: req.body.watched,
            user: req.params.id
        });
        let foundUser = await db.User.findById(req.params.id);
        foundUser.movies.push(movie.id);
        await foundUser.save();
        let foundMovie = await db.Movie.findById(movie._id).populate("user", {
            username: true
        });
        return res.status(200).json(foundMovie)
    } catch(err){
        return next(err)
    }
}

exports.getMovie = async function(req, res, next){
    try{
        let movie = await db.Movie.findById(req.params.movie_id)
        return res.status(200).json(movie);
    } catch(err) {
        return next(err);
    }
}

exports.updateMovie = async function(req, res, next){
    try{
        let movie = await db.Movie.updateOne({
            _id: req.params.movie_id
        },
        {
            "watched" : req.body.watched,
            "myRating": req.body.myRating
        })
        return res.status(200).json(movie)
    } catch(err){
        return next(err);
    }
}

exports.getAllMovies = async function(req, res, next){
    try{
        let movies = await db.Movie.find({user: req.params.id}).populate("user",{
            _id: true
        })
        return res.status(200).json(movies);
    }  catch(err){
        return next(err);
    }
}

exports.deleteMovie = async function(req, res, next){
    try{
        let foundMovie = await db.Movie.findById(req.params.movie_id);
        await foundMovie.remove();
        return res.status(200).json(foundMovie);
    } catch (err) {
        return next(err)
    }
}