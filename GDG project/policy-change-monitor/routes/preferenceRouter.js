const express = require('express');
const preferenceRouter = express.Router();
const {getPreferencePage, postPreference} = require('../controller/preferenceController');

preferenceRouter.get('/', getPreferencePage);
preferenceRouter.post('/', postPreference);

module.exports = { preferenceRouter };