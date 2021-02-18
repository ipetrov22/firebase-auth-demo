const config = require('./config/config');
const connectDb = require('./config/database');
const routes = require('./router');
const express = require('express');
const cors = require('cors');

const app = express();
connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(config.port, console.log(`Server is running on port ${config.port}`));