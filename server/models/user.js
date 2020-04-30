const   mongoose    = require("mongoose"),
        bcrypt      = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

//Hash & Salt
userSchema.pre("save", async function(next){
    try{
        if(!this.isModified("password")){
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword
        return next();
    } catch(err){
        return next(err);
    }
});

//Check Password
userSchema.methods.comparePassword = async function(attemptPassword, next){
    try{
        let isMatch = await bcrypt.compare(attemptPassword, this.password);
        return isMatch;
    } catch (err){
        return next(err);
    }
}

const User = mongoose.model("User", userSchema);

module.exports = User; 
