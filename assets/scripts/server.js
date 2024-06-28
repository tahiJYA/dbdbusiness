const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el middleware de CORS
require('dotenv').config();
console.log('API Key:', process.env.OPENAI_API_KEY);

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configuración básica de CORS para permitir todas las solicitudes desde cualquier origen
app.use(cors());

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: userMessage,
            max_tokens: 150,
            n: 1,
            stop: null,
            temperature: 0.7,
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        const botResponse = response.data.choices[0].text.trim();
        res.json({ response: botResponse });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error communicating with OpenAI API');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});