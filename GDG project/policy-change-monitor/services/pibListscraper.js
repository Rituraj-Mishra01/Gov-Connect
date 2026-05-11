const express = require('express')
const axios = require('axios');
const cheerio = require('cheerio');

exports.fetchPibList = async function fetchPibList() {
  const { data: html } = await axios.get(
    "https://www.pib.gov.in/allRel.aspx?reg=3&lang=1"
  );

  const $ = cheerio.load(html);
  const items = [];

  $("a").each((_, el) => {
    const title = $(el).text().trim();
    const href = $(el).attr("href");

    if (href && href.includes("PressReleasePage.aspx")) {
      items.push({
        title,
        url: `https://pib.gov.in/${href}`
      });
    }
  });
  //console.log("Fetched PIB List Items:", items.length);
  return items;
}
