//use this to list available models
require('dotenv').config()
const axios = require('axios');

const API_KEY = process.env.GOOGLE_API_KEY;

async function listModels() {
  try {
    const response = await axios.get(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`
    );
    
    console.log("Available models:");
    console.log(JSON.stringify(response.data.models, null, 2));
  } catch (error) {
    console.error("Error listing models:", error.message);
    if (error.response) {
      console.error("Response:", error.response.data);
    }
  }
}

listModels();
