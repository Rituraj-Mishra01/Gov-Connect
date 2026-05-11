const express = require('express');
const{loadPreferences, savePreferences} = require('../model/preference');
exports.getPreferencePage = (req, res) => {
    const ministries = loadPreferences();
    //console.log("Loaded preferences:", ministries);
  res.render('preference', { title: 'User Preferences', saved: req.query.saved==='true'?true:false, preferences: ministries});
}
exports.postPreference = (req, res) => {
  if(typeof req.body.ministry === 'string'){
    // Single selection case
    const singleMinistry = req.body.ministry;
    if(singleMinistry === 'showall'){
      //console.log("Preferences cleared: Show All selected");
      savePreferences([]);
      return res.redirect('/preferences?saved=true');
    }
    //console.log("Preferences updated:", singleMinistry);
    savePreferences([singleMinistry]);
    return res.redirect('/preferences?saved=true');
  }
  const ministries = Object.values(req.body.ministry)
  //console.log("Preferences updated:", Object.values(ministries));
  savePreferences(ministries);
  res.redirect('/preferences?saved=true');
}