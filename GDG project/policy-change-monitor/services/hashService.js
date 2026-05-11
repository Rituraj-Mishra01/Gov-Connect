const express = require('express')
const crypto = require('crypto')

exports.generateHash = (text) => {
  return crypto
    .createHash("sha256")
    .update(text)
    .digest("hex");
}

