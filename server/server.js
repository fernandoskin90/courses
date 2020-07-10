const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const https = require('https');
const PORT = process.env.PORT || 3001;

const app = express();
require('dotenv').config();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/test', async (req, resp) => {
  try {
    const {
      body: { url },
    } = req;

    const data = await axios({
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Origin: 'http://test.mytablemesa.com',
      },
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    });
    resp.status(200).send(data.data);
  } catch (error) {
    resp.status(500).send(error);
  }
});
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
