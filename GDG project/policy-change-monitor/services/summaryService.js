const express = require('express')
const { GoogleGenerativeAI } = require('@google/generative-ai')

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

exports.summarize = async function summarize(text) {
  try {
    const model = genAI.getGenerativeModel({
      model: "models/gemini-flash-lite-latest", // or another available model
    });

    const prompt = `
You are a policy analyst.
Summarize the following Indian government press release in 3–4 bullet points.
Focus only on policy decisions, rule changes, approvals, or financial implications.

Text:${text}`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();
    //console.log('Summary Generated:');
    return response.trim();
  } catch (error) {
    return null;
  }
}
