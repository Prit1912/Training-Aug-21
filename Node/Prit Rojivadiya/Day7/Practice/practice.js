var express = require("express");
var app = express();

// application level middleware
app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

/*
app.use("/user/:id", function (req, res, next) {
  console.log("Request Type:", req.method);
  next();
});

app.use(
  "/user/:id",
  function (req, res, next) {
    console.log("Request URL:", req.originalUrl);
    next();
  },
  function (req, res, next) {
    console.log("Request Type:", req.method);
    next();
  }
);
*/


/*
app.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') next('route') // output -> 'special'
    // otherwise pass the control to the next middleware function in this stack
    else next() // Output -> regular
  }, function (req, res, next) {
    // send a regular response
    res.send('regular')
  })
  app.get('/user/:id', function (req, res, next) {
    res.send('special')
  })

  */


// middleware in array
function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }
  
  function logMethod (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  }
  
  var logStuff = [logOriginalUrl, logMethod]
  app.get('/user/:id', logStuff, function (req, res, next) {
    res.send('User Info')
  })



// error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

  
app.listen(8000, () => {
  console.log("listening to port 8000");
});

