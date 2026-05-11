const express = require('express')
const mongoose = require('mongoose')
const PressRelease = require('../model/pressRelease');
const {loadPreferences, savePreferences} = require('../model/preference');

exports.getPolicyPage = (req, res) => {
  let preferences = loadPreferences();
  let query = {isPolicyRelated: true}
  if(preferences.length > 0){
    query.ministry = {$in: preferences};
  }
  const policies = PressRelease.find(query).then((policies) => {
          res.render('mypolicy', { title: 'My Policy',policies: policies });
      }).catch((err) => {
          res.render('mypolicy', { title: 'My Policy',policies: [] });
      });
}
exports.getPolicySummary = (req, res) => {
  const policy = PressRelease.findById(req.params.id).then((policy)=>{
    res.render('policySummary', { title: 'Policy Summary', policy: policy});
  }).catch((err)=>{
    console.log("ERROR FETCHING POLICY SUMMARY:", err);
    res.status(500).send("Error fetching policy summary");
  });
  
}