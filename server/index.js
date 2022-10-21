const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')
app.get("/api/fortune", getFortune)

const { getBook } = require('./controller')
app.get("/api/book", getBook)

const { getQuote } = require('./controller')
app.get("/api/quote", getQuote)

const { getMeal } = require('./controller')
app.get("/api/meal", getMeal)

app.listen(4000, () => console.log("Server running on 4000"));
