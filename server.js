require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require('morgan');
const path = require('path')


// Connect to MongoDB using the connection string in the .env file
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'));

// Import controller functions
const clothCtrl = require('./controllers/clothing')

// Public routes

app.get('/', clothCtrl.index);

app.get('/clothing', clothCtrl.home);

app.get('/clothing/new', clothCtrl.newCloth);

app.post('/clothing', clothCtrl.postCloth);

app.get('/clothing/:clothId', clothCtrl.showCloth);

app.get('/clothing/:clothId/edit', clothCtrl.editCloth);

app.put('/clothing/:clothId', clothCtrl.updateCloth);

app.delete('/clothing/:clothId', clothCtrl.deleteCloth);

// listener
app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
  