const express = require('express')
const mongoose = require('mongoose')
const PressRelease = require('../model/pressRelease.js')
const { fetchPibList } = require('./pibListscraper.js')
const { fetchPibDetail } = require('./pibDetailScraper.js')
const { generateHash } = require('./hashService.js');
const { isPolicyRelated } = require('./keywordService.js')
const { summarize } = require('./summaryService.js')

 exports.runPibCrawler = async function runPibCrawler() {
      //console.log("Connected to DB for PIB Crawler");
      const items = await fetchPibList();

      for (const item of items) {
          const exists = await PressRelease.findOne({ url: item.url });
          if (exists) continue; // skip old items

          const detail = await fetchPibDetail(item.url);
          const hash = generateHash(detail.content);

          const policy = isPolicyRelated(detail.content); //replace content with item.title
          let summary = null;

          if (policy) {
            summary = await summarize(detail.content);
          }

          await PressRelease.create({
            url: item.url,
            ministry: detail.ministry,
            title: item.title,
            contentText: detail.content,
            contentHash: hash,
            isPolicyRelated: policy,
            summary
          });

          //console.log("NEW PRESS RELEASE SAVED:", item.title);
      }
}
