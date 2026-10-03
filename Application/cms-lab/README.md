# CMS Lab

A small blog CMS built with Express, EJS and MongoDB.

## Run

1. Open Terminal in this folder.
2. Run `npm install`.
3. Run `npm start`.
4. Open **http://localhost:3000**.

MongoDB is optional for the demo. If MongoDB is running locally, posts are stored in the `cms_lab` database. If MongoDB is unavailable, the app automatically starts in demo mode with sample posts; posts created in demo mode last until the server restarts.

To use another MongoDB server, set `MONGO_URL` before starting the app.
