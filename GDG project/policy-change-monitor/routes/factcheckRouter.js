const express = require('express');
const { getFactcheckPage, postfactcheck } = require('../controller/factcheckController');
const factcheckRouter = express.Router();

factcheckRouter.get('/', getFactcheckPage);
factcheckRouter.post('/verify', postfactcheck);
module.exports = { factcheckRouter };