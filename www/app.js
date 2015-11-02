'use static';

var express = require('express');
var app = express();

app.set('port', 8082);

// app.use(express.static('.'));
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));
app.use('/node_modules', express.static('node_modules'));
app.use('/template', express.static('template'));

app.use('/test', express.static('test.html'));


app.get('/', function(req, resp){
	resp.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'),function(){
	console.log('express listenning ' + app.get('port'));
});
