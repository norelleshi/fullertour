const mongoose = require('mongoose');
mongoose.set('debug', true);

const url = "mongodb+srv://Norelle:6639@cluster0-i0tnj.mongodb.net/fullertour?retryWrites=true&w=majority";
mongoose.connect(url, { 
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(err => console.log('ERROR:', err.message));

mongoose.Promise = Promise;

module.exports.Comment = require('./comment');