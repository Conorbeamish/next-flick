const   mongoose    = require("mongoose"),
        User        = require("./user"),
        db          = require("../models/index");

const movieSchema = new mongoose.Schema({
    info: {
        type: String
    },
    watched: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    myRating: {
        type: Number
    }
});

//Remove data associated with user on delete
movieSchema.pre("remove", async function(next){
    try{
        let user = await User.findById(this.user);
        user.movies.remove(this.id);
        await user.save();
    } catch(err){
        return next(err);
    }
})

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;