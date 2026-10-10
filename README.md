# QuickRuit Interview Questions

A lightweight practice page that selects a random question based on a candidate's role and experience level.

## Using the page

1. Open the deployed GitHub Pages site, or serve the project files from a local web server.
2. Choose **Software Developer**, **Backend Engineer**, or **Data Analyst (SQL)**.
3. Choose **Junior** or **Senior** and select **Get a random question**.
4. Select **Another random question** to continue. Questions are shuffled and are not repeated until the selected question pool has been used.

Junior sessions include Easy and Medium questions. Senior sessions include Medium and Hard questions. The question view displays the question description without its title, topic, or difficulty label.

## Question banks

- `questionData.js` bundles the DSA questions used for Software Developer and Backend Engineer sessions.
- `sql_questions.json` supplies SQL questions for Backend Engineer and Data Analyst sessions.
- `question.json.txt` is the JSON source used to maintain the bundled DSA question bank.

The SQL bank is loaded with `fetch`, so the page must be opened through GitHub Pages or a local HTTP server; opening `index.html` directly as a `file://` URL will not load SQL questions.
