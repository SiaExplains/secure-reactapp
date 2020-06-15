import express from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import bodyParser from 'body-parser';

import data from './data.json';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/courses', (req, res) => {
    res.send({ data });
});

app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`);
});
