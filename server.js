// DEPENDENCIES
// ============

var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 8001),
    application = module.exports = express();

application.configure( function() {
  application.use(express.urlencoded());
  application.use(express.json());
  application.use(express["static"](__dirname + "/public"));

});


var books = [
  {
    "id": "0",
    "author": "ira levin",
    "title": "stepford wives",
    "price": "4.99"
  },
  {
    "id": "1",
    "author": "aldous huxley",
    "title": "brave new world",
    "price": "6.99"
  },
  {
    "id": "2",
    "author": "harper lee",
    "title": "to kill a mockingbird",
    "price": "7.99"
  },

  {
    "id": "3",
    "author": "ray bradbury",
    "title": "fahrenheit 451",
    "price": "6.99"
  }
];

application.post('/book', function(req, res) {
  if(!req.body.hasOwnProperty('author') || 
     !req.body.hasOwnProperty('title') ||
     !req.body.hasOwnProperty('price')
     ) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

  var newBook = {
    author : req.body.author,
    title : req.body.text,
    price : req.body.price
  };

  books.push(newQuote);
  res.json(true);
});


/*application.delete('/api/books/:id', function(req, res) {
  if(books.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: No book found');
  }

  books.splice(req.params.id, 1);
  res.json(true);
});*/


application.get("/api/books", function(req, res) {
    res.json(books);
});


//random has to go first because the routes are checked in order and if ID was first, random would be treated like an ID
application.get("/random", function(req, res) {
    var id = Math.floor(Math.random() * books.length);
    var q = books[id];
    res.json(q);
});

application.get('/api/books/:id', function(req, res) {
  if(books.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No book found');
  }
  var q = books[req.params.id];
  res.json(q);
});

// Start Node.js Server
http.createServer(application).listen(port);

console.log('Welcome to the Test Stack!\n\nPlease go to http://localhost:' + port);