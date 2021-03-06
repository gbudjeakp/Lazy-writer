const express = require('express')
const app = express()

const port = 5000 || process.env.PORT

app.get('/', (req, res) => {
  res.send('Hey Server is up')
})

app.listen(port, () => {
  console.log(`Server is running on localhost ${port}`)
})
