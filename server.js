// REQUIREMENTS - SETUP
var express        = require('express'),
    app            = express(), // create app with express
    mongoose       = require('mongoose'), // mongoose to connect to MongoDB
    morgan         = require('morgan'), // log requests to the console
    bodyParser     = require('body-parser'), // pull input data from HTML POST
    methodOverride = require('method-override'), // simluate DELETE and PUT
    mongoUri       = process.env.MONGOLAB_URI || "monogodb://localhost:27017/todo_angular",
    port           = process.env.PORT || 3000;

// CONFIGURATIONS
mongoose.connect(mongoUri); // connect to mongoDB

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.use("/", function(req, res) {
  res.send('Hello');
});

// LISTEN - START CONNECTION
// mongoose.connection.once('open', function() {
  app.listen(port, function() {
    console.log('LISTENING ON PORT: ', port);
  });
// });
