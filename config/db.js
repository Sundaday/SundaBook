const mongoose = require('mongoose');

//MongoDB connexion
mongoose.connect("mongodb+srv://" + process.env.USER + ":" + process.env.PASSWORD + "@sundacluster0.vvmwg.mongodb.net/SundaBook",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Failed to connect to MongoDB', err))