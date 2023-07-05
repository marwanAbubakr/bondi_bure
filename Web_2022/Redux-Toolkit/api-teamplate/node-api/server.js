// to import or requsted express and cors
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
// to back the data like file json
app.use(express.json())

app.post('/api/users', (req, res) => {
  setTimeout(() => {
    res.send(req.body)
  }, 15000)
})
// make the port and play it
app.listen('5000', () => {
  console.log('server runnig on port 5000 ')
})

//  "scripts": {
// ---- you can change this word "start" to wanna to chage with it or its up to you >.. but when run server wright this ...
// npm run "your word ^_^"
//     "start": "nodemon server.js"
//   },
