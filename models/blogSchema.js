const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true
    }
});

const crud = mongoose.model('blogCrud',blogSchema);

module.exports = crud;