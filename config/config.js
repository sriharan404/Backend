const mongoose = require('mongoose');
//mongodb connectivity
mongoose.connect('mongodb+srv://sample:yDwH0A6cvojkjOZZ@cluster0.uvqx2.mongodb.net/sample?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => {
        if (!err) {
            console.log('MongoDB Connected.')
        } else {
            console.log('Error in DB connection : ' + err)
        }
    }
);

require('../model/index')