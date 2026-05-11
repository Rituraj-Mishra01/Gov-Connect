const express = require('express')
const mongoose = require('mongoose')

const pressReleaseSchema = new mongoose.Schema({
  url: { type: String, unique: true, required: true },
  ministry: { type: String, default: 'PMO' },
  title: String,
  publishedAt: Date,

  contentHash: String,
  contentText: String,

  isPolicyRelated: Boolean,
  summary: String,

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("PressRelease", pressReleaseSchema);

