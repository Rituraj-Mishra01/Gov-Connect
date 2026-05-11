const express = require('express')
const { GoogleGenerativeAI } = require('@google/generative-ai')

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

exports.verify = async function verify(text) {
  try {
    const model = genAI.getGenerativeModel({
      model: "models/gemini-flash-lite-latest", // or another available model
    });

    const prompt = `
Fact-check the following statement related to Government of India policies.

Return:
- Verdict: True / False / Partially True
- Short explanation (max 2 sentences)
- Official source name

Statement:${text}`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();
    //console.log('response given:');
    return response.trim();
  } catch (error) {
    return null;
  }
}
