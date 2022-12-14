const express = require('express')
const path = require('path')
const cors = require('cors');

const app = express()
const port = 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.use(cors({
  origin: [`http://localhost:${port}/`],
  methods: ['GET'],
  allowedHeaders: ['Content-Type']
}));


app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Methods', 'GET')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.send()
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
