const mongoose = require('mongoose');

// creating a schema

const PostSchema = mongoose.Schema({
    // if you want to add "not empty" conditions, you can just set string into an object and clarify
    title: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//also needs export but model function needs[name_prefered for this model, schema to be used]
module.exports = mongoose.model('Posts', PostSchema);