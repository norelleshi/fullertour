const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const commentRoutes = require('./routes/comments');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => res.sendFile('index.html'));

app.use('/api/comments', commentRoutes);


app.listen(process.env.PORT || 3000, process.env.IP, () => 
		   console.log("The server has started!"));