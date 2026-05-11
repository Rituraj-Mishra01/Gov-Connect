const express = require('express')
const KEYWORDS = [
  "amend",
  "amendment",
  "increase",
  "decrease",
  "approve",
  "notify",
  "establish",
  "policy",
  "rules"
];

exports.isPolicyRelated = (text) => {
  const lower = text.toLowerCase();
  return KEYWORDS.some(k => lower.includes(k));
}
