const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    user: {
        type: Number,
        ref: 'user',
        required: true
    },
    courses:[
        {
            courseId: {
                type: Number,
                ref: 'course',
                required: true
            },
            videos:{
                type: [Object],
                required: true
            }
        }
    ]
})

const videoProgress = mongoose.model('videoProgress',progressSchema);

module.exports = {videoProgress};