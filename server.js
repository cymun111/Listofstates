var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();

var app = express();

// Logging
var logger = function(req, res, next){
  console.log('Logging...');
  next();
}
app.use(logger);

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

var states = [
{
  id: 'CA',
  state: 'California',
  population: '38.8 million',
  },
{
  id: 'TX',
  state: 'Texas',
  population: '27 million',
  },
{
  id: 'FL',
  state: 'Florida',
  population: '19.9 million',
  },
{
  id: 'NY',
  state: 'New York',
  population: '19.8 million',
  },
{
  id: 'IL',
  state: 'Illinois',
  population: '12.9 million',
  },
{
  id: 'PA',
  state: 'Pennsylvania',
  population: '12.8 million',
  },
{
  id: 'OH',
  state: 'Ohio',
  population: '11.6 million',
  },
{
  id: 'GA',
  state: 'Georgia',
  population: '10.1 million',
  },
{
  id: 'NC',
  state: 'North Carolina',
  population: '10 million',
  },
{
  id: 'MI',
  state: 'Michigan',
  population: '9.9 million',
  },

]

 /* Route Handler */
 router.use(function (req,res,next) {
   next();
 });
app.get('/states', function(req, res, next){
  res.render('index',{
    title: 'States',
    states: states
  });
});
app.get('/states:id', function(req, res){
  res.render('ID',{
    title: 'States',
    states: states,
  });
});

/* Starting Sever*/
app.listen(3000, function(){
  console.log('Server Started on Port 3000..');
})
