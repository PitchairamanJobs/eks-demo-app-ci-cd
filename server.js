const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello World! - Welcome to ICU Program Project 2 using Githubaction  - Perumbakkam branch')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
