const mongoose = require('mongoose');
mongoose.set('debug', true);

const url = process.env.DATABASEURL || "mongodb://localhost:27017/fullertour";
mongoose.connect(url, { 
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(err => console.log('ERROR:', err.message));

mongoose.Promise = Promise;

module.exports.Comment = require('./comment');