//require express
var express = require('express');


//launch a running web server
var app = express();
app.listen(8000);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/scripts', express.static(__dirname + '/node_modules/'));

//get something to show in the browser
/*app.get('/', function(request, response){
  console.log("Hello World");
});*/


//return html data
/*app.get('/', function(request, response){
  response.send("Hey, hello from the server!");
});*/

//return data as an object JSON
/*app.get('/', function(request, response){
  response.send({ name: 'John', age: 30 });
});

//another server route
app.get('/anotherRoute', function(request, response){
  response.send("Hey, I'm another route!");
});

app.get('/me', function(request, response){
  response.send({name: 'Martha', favoriteFood:'thai food', presentBirtdahy:'trip to Japan'});
});

app.get('/names/:name', function(request, response){
  response.send("Hello " + request.params.name);
});

app.get('/names/:name/:lastname', function(request, response){
  response.send("Hello " + request.params.name + ' test ' +request.params.lastname);
});

app.get('/names', function(request, response){
  response.send("Hello " + request.query.food);
});

//another route = person
app.get('/person/:firstName/:lastName', function(request, response){
	response.send("Hello " + request.params.firstName + ' ' +request.params.lastName);
});*/

/*app.get('/', function(request, response){
  response.render('index');
});

app.get('/names', function (request, response){
  response.render('myNamesView', { name:"John", lname:'Sparrow' });
});
*/




