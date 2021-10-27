var express = require("express");
var app = express();

app.get('/', function (req, res, next) {
      try {
        throw new Error('BROKEN')
      } catch (err) {
        next(err)
      }
  })

app.get("/users/:id", function (req, res, next) {
  //Create an error and pass it to the next function
  if (req.params.id === "0") {
      next(new Error('Id starts from 1'))
  }
  res.send(req.params.id);
});

//An error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8000);
