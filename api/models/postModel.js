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
    content: {
        type: String,
        required: [true, "Please add the content"]
    },
    image: {
        type: String,
        required: [true, "Please add the image"]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    comments: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            comment: {
                type: String,
                required: [true, "Please add a comment"]
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    saves: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
