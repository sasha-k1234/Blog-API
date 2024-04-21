const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    date_posted:{type:Date,required:true},
    author:{type:Schema.Types.ObjectId,ref:"User"},
    isPublished:{type:Boolean,default:false}
});

module.exports = mongoose.model("Post",PostSchema);