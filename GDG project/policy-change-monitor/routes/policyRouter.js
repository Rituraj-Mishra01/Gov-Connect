const express = require('express');
const { getPolicyPage, getPolicySummary } = require('../controller/policyController');
const policyRouter = express.Router();

policyRouter.get('/', getPolicyPage);
policyRouter.get('/readsummary/:id', getPolicySummary);

module.exports = { policyRouter };