const   express = require("express"),
        router  = express.Router({mergeParams: true});

const {
    createMovie,
    getAllMovies,
    getMovie,
    deleteMovie,
    updateMovie
} = require("../handlers/movies");

router 
    .route("/")
    .post(createMovie)
    .get(getAllMovies);

router
    .route("/:movie_id")
    .get(getMovie)
    .put(updateMovie)
    .delete(deleteMovie);

module.exports = router;