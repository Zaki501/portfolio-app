// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');

require('dotenv').config();
const mongoose = require("mongoose");
const mongo = require("mongodb");
const bodyParser = require('body-parser');
const cors = require('cors');

const Schema = mongoose.Schema;
mongoose.connect((process.env.MONGO_URI), { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("mongoDB is now connected")
});

// Basic Configuration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


app.get("/api", (req, res) => {
  res.json({ message: "Api projects homepage goes here"});
});

//// URL shortener project
// Schema
const urlSchema = new Schema({
  original_url: String,
  short_url: Number
})
//Model
const urlModel = mongoose.model('url', urlSchema);
app.get("/api/shorturl", function (req, res) {
  res.sendFile(process.cwd() + '/client/views/urlshortener/index.html');
})
app.post("/api/shorturl/new", function (req, res) {
  const enteredUrl = req.body.url;
console.log(enteredUrl)
  // if it exists, find document and send response with json ---> exists.findAndSend
  // if it doesnt exist, add to db (give it an ID), then send response with json ---> 

  //ue name. You can set "unique: true" on the name field i



  urlModel.exists({ original_url: enteredUrl }, function (error, bool) {
    if (error) return console.error(error);
    console.log("Does it exist ?", bool);

    //empty mongoDB entries - how?
    const regex = /(http|https)/;

    if (regex.test(enteredUrl) === false) {
      console.log("Not a valid url entry");
      res.json({
        error: 'invalid url'
      })
    } else if
      (bool === true) {
      console.log("true - sending json")
      findAndSend();
      console.log("DONE")
    } else {
      console.log("false - create, save and send")
      createSaveAndSendUrl();
      console.log("DONE")
    }
  })


  const findAndSend = function () {
    urlModel.find({ original_url: enteredUrl }, function (error, data) {
      if (error) return console.error(error);
      console.log(data[0])
      res.json({
        original_url: data[0].original_url,
        short_url: data[0].short_url
      })
    })
  }
  const createSaveAndSendUrl = function () {

    urlModel.find({}, function (err, data) {
      console.log("list of urls =>", data.length)

      const enteredUrl = new urlModel({
        original_url: req.body.url,
        short_url: (data.length + 1)
      });
      res.json({
        original_url: enteredUrl.original_url,
        short_url: enteredUrl.short_url
      })

      enteredUrl.save(function (err, data) {
        if (err) return console.error(err);
        console.log("create and save - done")
      });
    })
  };
})
app.get("/api/shorturl/:shortNumber", function (req, res) {

  urlModel.find({ short_url: req.params.shortNumber }, function (err, data) {
    if (err) return console.log(err);
    if (!data.length) {
      res.json({
        error: "No short URL found for the given input"
      })
    } else {
      res.redirect(data[0].original_url)
    }
  })
})

//// Timestamp project
app.get("/api/timestamp", function (req, res) {
  res.sendFile(process.cwd() + '/client/views/timestamp/index.html');
});

app.get("/api/timestamp/time/:input?", function (req, res) {

  const entry = req.params.input;
  const entryToNumber = Number(entry);

  const isDate = () => {
    return (!isNaN(new Date(entry).getTime()))
  }

  if (!req.params.input) {
    res.json({
      unix: Date.now(),
      utc: new Date().toUTCString()
    })
  }
  if (isDate()) {
    res.json({
      unix: new Date(entry).getTime(),
      utc: new Date(entry).toUTCString()
    })
  }
  if (new Date(entryToNumber) != "Invalid Date") {
    res.json({
      unix: entryToNumber,
      utc: new Date(entryToNumber).toUTCString()
    })
  } else {
    res.json({
      error: "Invalid Date"
    })
  }

})
//// Header parser project
app.get("/api/headerparser", function (req, res) {
  res.sendFile(process.cwd() + '/client/views/headerparser/index.html');
});
app.get("/api/headerparser/whoami", function (req, res) {
  console.log(req.header)
  console.log(req.headers)
  res.json({ 
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']

 })
});





