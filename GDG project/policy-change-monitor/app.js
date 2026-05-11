require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const {runPibCrawler} = require('./services/pibCrawler')
const {startPolicyMonitoring} = require('./jobs/scheduler')
const port = process.env.PORT || 3000;


const app = express();

const  {policyRouter}= require('./routes/policyRouter');
const  {homeRouter}= require('./routes/homeRouter');
const  {preferenceRouter}= require('./routes/preferenceRouter');
const  {factcheckRouter}= require('./routes/factcheckRouter');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded())
app.use(express.static('public'));
app.use('/', homeRouter);
app.use('/mypolicy', policyRouter);
app.use('/preferences', preferenceRouter);
app.use('/factcheck', factcheckRouter);

mongoose.connect(process.env.MONGODB_URI).then(async ()=>{
  console.log("CONNECTED TO DB");
  await runPibCrawler();
  // Start the policy monitoring scheduler
  startPolicyMonitoring();
  app.listen(port, () => {
  console.log(`Policy Change Monitor app listening at http://localhost:${port}`);
  });
}).catch((err)=>{
  console.log("DB CONNECTION ERROR:", err);
})
