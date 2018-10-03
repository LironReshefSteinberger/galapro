const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);

const addUrlRoutes = require('./routes/UrlRoute')

app.use(cors({
  origin: ['http://localhost:8080'],
  credentials: true // enable set cookie-
}));

app.use(bodyParser.json());

app.use(express.static('dist'));

// app.get('/', (req, res) => res.send('galapro'))


addUrlRoutes(app)

const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});


io.on('connection', socket => {
  console.log('connected to socket')

  socket.on('openSocket', () => {
    io.emit('openSocket');
  })

  // socket.on('disconnect', () => {
  //   // console.log('user disconnected');
  // })
})
// app.listen(3000, () => console.log('Example app listening on port 3000  !'))