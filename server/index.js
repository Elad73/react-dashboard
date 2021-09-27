const express = require('express');
const path = require('path');
require('dotenv').config();

const keys = require('./config/keys');

const PORT = keys.port || 5000;
const DEV_MODE = keys.devMode === 'true';



const app = express();

app.use(express.json());

// Routing
require('./routes/reportsRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    //Express will serve up production assets
    //like our main.js file, or main.css file!
    app.use(express.static(path.join(__dirname, '/../client/build')));

    //Express will serve up the index.html file
    //if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});


app.listen(PORT, () => console.log(`Listening on ${PORT}`));
