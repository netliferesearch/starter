/* eslint-disable */

const express = require('express');
const basicAuth = require('basic-auth');

const app = express();
const port = process.env.PORT || 8081;

// Authenticator
app.use((req, res, next) => {
    const user = basicAuth(req);
    const username = process.env.AUTH_USER || 'netlife';
    const password = process.env.AUTH_PASS || 'research';

    function unauthorized() {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.sendStatus(401);
    }

    if (!user || !user.name || !user.pass) {
        return unauthorized();
    }

    if (user.name === username && user.pass === password) {
        return next();
    }

    return unauthorized();
});


app.use(express.static('dist'));

app.listen(port, () => {
    console.log(`Open http://localhost:${port}/ 🚀`);
});
