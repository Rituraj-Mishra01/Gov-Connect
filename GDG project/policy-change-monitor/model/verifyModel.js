const fs = require('fs');
const path = require('path');

const VERIFY_FILE = path.join(__dirname, '..', 'data', 'factcheckResult.txt');

// Load verification result from file
function loadVerification() {
    if (fs.existsSync(VERIFY_FILE)) {
        return fs.readFileSync(VERIFY_FILE, 'utf-8');
    }
    return "No verification result available.";
}

// Save verification result to file
function saveVerification(result) {
    fs.writeFileSync(VERIFY_FILE, result);
}

module.exports = {
    loadVerification,
    saveVerification
};