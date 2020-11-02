import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = 'mongodb+srv://admin:Jtg6LZnHRxI1t24J@cluster0.fojbh.mongodb.net/pollyDb?retryWrites=true&w=majority'

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

app.get('/polly/cards', (req, res ) => {

    cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

app.post('/polly/cards', (req, res ) => {
    const dbCard = req.body;

    cards.create(dbCard, (err, data) => {
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