const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
// Bodyparser Middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;

// connect to mlab database
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to database'))
  .catch(err => console.log(err));

// API
const items = require('./routes/api/item');
const stores = require('./routes/api/store');

// Routs
app.use('/api/items', items);
app.use('/api/stores', stores);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('now listening for requests on port: 4000');
})