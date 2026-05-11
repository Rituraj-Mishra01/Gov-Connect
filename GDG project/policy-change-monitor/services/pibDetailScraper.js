const express = require('express')
const axios = require('axios');
const cheerio = require('cheerio');

exports.fetchPibDetail = async function fetchPibDetail(url) {
  const { data: html } = await axios.get(url);
  const $ = cheerio.load(html);

  let ministry = $("#MinistryName").text().trim();
  if (ministry === "") {
    ministry = "PMO";
  }
  let content = $("p")
  .map((i, el) => {
    const $clone = $(el).clone();
    $clone.find("a").remove();
    return $clone.text();
  })
  .get()
  .join(" ")
  .replace(/\s+/g, " ")
  .trim();
  content = content.replace(/\b[A-Z]{2,}\/[A-Z]{2,}\b$/, "").trim(); //removing patterns at the end
  const detail = {
    ministry,
    content: content.slice(0, 8000) //limiting to 8000 chars
  };
  //console.log("Fetched PIB Detail for URL:", url);
  return detail;
}

