import express from 'express';

const app = express()
const port = process.env.PORT || 3000;

app.get('/water', (req, res) => {
    console.log(`${req.ip} is asking for Pants`)
    res.send('Here is some pants for you')
})
app.get('/food', (req, res) => {
    console.log(`${req.ip} is asking for Shirt`)
    res.send('Here is a Shirt for you')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})