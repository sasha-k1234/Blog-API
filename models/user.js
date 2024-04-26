const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{
        type:String,
        enum:["user","editor","visitor"],
        default:"visitor",
    }
});

module.exports = mongoose.model("User",UserSchema);