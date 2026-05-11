const express = require('express');
const mongoose = require('mongoose');
const PressRelease = require('../model/pressRelease');

exports.getHomePage = (req, res, next) => {
    const policies = PressRelease.find({ isPolicyRelated: true }).then((policies) => {
        res.render('home', { title: 'Policy Change Monitor',policies: policies });
    }).catch((err) => {
        res.render('home', { title: 'Policy Change Monitor',policies: [] });
    });
    
}