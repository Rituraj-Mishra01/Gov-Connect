const express = require('express');
const { loadVerification, saveVerification } = require('../model/verifyModel');
const {verify} = require('../services/verifyService');

exports.getFactcheckPage = (req, res) => {
  //get aitext from file or error message
  const aiText = loadVerification();
  //console.log("AI Text:", aiText);
  const verified = req.query.verified;
  res.render('factcheck', { title: 'My Factcheck', verified, aiText });
}
exports.postfactcheck = async (req, res) => {
  //call gemini to verify
  const toverify = req.body.toverify;
  const result = await verify(toverify);
  saveVerification(result || "Verification failed. Please try again.");
  res.redirect('/factcheck?verified=true')
}