const mongoose = require('mongoose');
const { Schema } = mongoose;


const topbotsSchema = new Schema({
    botId: {
        type: String,
    },
    botName: {
        type: String,
    },
    botAvatar: {
        type: String,
    },

    votes: {
        type: Number,
        default: 0,
    },

    voters: {
        type: Array,
        default: [],
    }


})




module.exports = mongoose.model('topbots', topbotsSchema);