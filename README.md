# Nodejs Live-List using AMP

1. Clone this repository

2. Enter the newly created repository

3. Execute from terminal/command line npm install to configure initial setup

4. Execute from terminal/command line node server.js to launch the Node.js server

5. Using the Postman tool, hit the http://localhost:3000/new with a JSON markup like

{
    "videoID": "[YOUTUBE_VIDEO_ID]"
}

Wait a moment to see the video being inserted in the live-list.

# Requirements
- Node.js

- Postman

- For better AMP testing (by adding #development=1 at the end of the URL) use Chrome

# Credits
Code created using the tutorial at https://blog.pusher.com/building-a-realtime-feed-with-node-js-and-amp/
