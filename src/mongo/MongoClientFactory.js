const mongoose = require("mongoose");

const connection = mongoose.connect('mongodb+srv://Sergio2822:Bismark2822@clustersergio0.kfvez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (req, res) =>{
    console.log('Connected to the DataBase')
});

module.exports = connection;