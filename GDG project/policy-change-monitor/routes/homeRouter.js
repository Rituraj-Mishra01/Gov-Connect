const express = require('express');
const homeRouter = express.Router();
const { getHomePage } = require('../controller/homeController');

homeRouter.get('/', getHomePage);

module.exports = { homeRouter };