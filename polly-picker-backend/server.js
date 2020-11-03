import express from 'express';
import mongoose from 'mongoose';
import pollypicker from './dbCards.js';
import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = 'mongodb+srv://admin:Tz5ARSoSMUY75I8G@cluster0.fojbh.mongodb.net/sample-apps?retryWrites=true&w=majority'

// Middleware
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});


// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.get('/polly/pp', (req, res ) => {

    pollypicker.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

app.post('/polly/pp', (req, res ) => {
    const dbCard = req.body;

    pollypicker.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

// API Listener
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});