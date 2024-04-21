const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommSchema = new Schema({
    date:{type:Date,required:true},
    text:{type:String,required:true},
    author:{type:Schema.Types.ObjectId,ref:"User"},
    postId:{type:String,required:true},
});

module.exports = mongoose.model("Comment",CommSchema);