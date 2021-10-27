var express = require('express')
var app = express()
var router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

/*
// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
*/

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  res.send('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id)
  res.send('special')
})

router.get('/',(req,res)=>{
    res.send('hello')
})

// mount the router on the app
app.use('/', router);



// subpath concept
const router1 = express.Router();
router1.get('/subpath1',(req,res)=>{
    res.send(req.originalUrl);
})

app.use('/rootpath',router1);

app.listen(8000,()=>{console.log('listening at port 8000')});

// https://stackoverflow.com/questions/27227650/difference-between-app-use-and-router-use-in-express