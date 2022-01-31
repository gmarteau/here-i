const express = require('express');

const weatherRoutes = require('./routes/weather');

const app = express();

app.use(express.json());

app.use('/api/weather', weatherRoutes);

module.exports = app;