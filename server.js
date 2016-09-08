const express = require('express');

const app = express();
const port = process.env.PORT || 8081;

app.use(express.static('dist'));

app.listen(port, () => {
    console.log(`Open http://localhost:${port}/ 🚀`);
});
