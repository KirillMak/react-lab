const mongoose = require('mongoose');

mongoose.connect(uri, options).then(
    () => { console.log(" successfully connected to db")},
    err => { 
        console.log(err);
    }
);