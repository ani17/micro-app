const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required: [true, "post must have title"]
    },
    description: {
        type: String,
        required: [true, "post must have description"]
    },
});

const Post = new mongoose.model('Post', postSchema);

module.exports = Post;