import express from 'express'
const appExpress = express()


const port = 3000
appExpress
  .get('/', (request, response) => {
    response.send('Hello World!')
  })
  .listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`)
  })
