const express = require('express');
const speedTest = require('speedtest-net');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/test', async (req, res) => {
    try {
        const test = speedTest({ acceptLicense: true });
        test.on('data', data => {
            res.json(data);
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
