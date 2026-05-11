<h1>GovConnect-Policy change monitor</h1>
<br><br>
<h4>Installation</h4><br>
git clone <repo-url><br>
cd project-root<br>
npm install<br><br>
<h4>Environment Variables</h4><br>
GOOGLE_API_KEY = your_google_api_key<br>
MONGODB_URI = your_mongodb_connection_string<br>
<p>Steps to get the key and the connection are given in the .env.example</p><br><br>
<h4>Running</h4><br>
npm start<br><br>
<h2>About</h2>
<pre>A Node.js–based backend system that automatically monitors government websites for policy updates, crawls and extracts relevant data, stores changes in MongoDB, and triggers notifications for users based on their interests.

Built for hackathon use and designed with scalability, modularity, and automation in mind.
Features

🔄 Scheduled monitoring using Cron jobs

🌐 Crawls multiple government URLs

🧠 Extracts structured data using Cheerio / Puppeteer

🗄️ Stores policies and change history in MongoDB

🔍 Detects new or updated policies

🔔 Notification-ready architecture (email / push / webhook)

⚙️ MVC-based clean project structure

📈 Extensible for future UI integration</pre><br><br>
<h2>Legal Note</h2>
<p>This project is intended for educational and research purposes. Always review a website’s robots.txt and terms of service before scraping.<br>The frequency of the scraping have been kept reasonably low to ensure no overloading of the server, no bypassing of authentication or captcha or any of the kind is ensured. </p>