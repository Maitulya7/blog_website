const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add the title"]
    },
    summary: {
        type: String,
        required: [true, "Please add the summary"]
    },
    content:{
        type:String,
        require:[true , "Please add the content"]
    },
    image:{
        type:String,
        require:[true , "Please add the image"]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
