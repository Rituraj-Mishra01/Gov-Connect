const fs = require('fs');
const path = require('path');

const PREFERENCE_FILE = path.join(__dirname, '..', 'data', 'userPreference.json');

// Load preferences from file
function loadPreferences() {
    if (fs.existsSync(PREFERENCE_FILE)) {
        const data = fs.readFileSync(PREFERENCE_FILE);
        return JSON.parse(data);
    }
    return [];
}

// Save preferences to file
function savePreferences(preferences) {
    fs.writeFileSync(PREFERENCE_FILE, JSON.stringify(preferences, null, 2));
}

module.exports = {
    loadPreferences,
    savePreferences
};