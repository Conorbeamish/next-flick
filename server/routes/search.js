const   express         = require("express"),
        router          = express.Router({mergeParams: true});
        
const {searchMovies}  = require("../handlers/search");


router
    .route("/")
    .get(searchMovies);

module.exports = router;