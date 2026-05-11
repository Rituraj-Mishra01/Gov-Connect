const cron = require('node-cron');
const { runPibCrawler } = require('../services/pibCrawler');

// Schedule the PIB crawler to run every day at 15 minutes
let isRunning = false;

exports.startPolicyMonitoring = async function startPolicyMonitoring() {
    cron.schedule('*/15 * * * *', async () => {
    if (isRunning) {
        console.log('PIB Crawler is already running. Skipping this run.');
        return;
    }
    try {
        isRunning = true;
        console.log('Starting PIB Crawler...');
        await runPibCrawler();
        console.log('PIB Crawler finished successfully.');
    } catch (error) {
        console.error('Error running PIB Crawler:', error);
    } finally {
        isRunning = false;
    }
    });
}