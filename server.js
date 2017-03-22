const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('port', process.env.PORT || 3000)

app.get('/', (request, response) => {
  fs.readFile(`${__dirname}/index.html`, (err, file) => {
    response.send(file)
  })
})

app.get('/api/v1/users', (request, response) => {
  database('users').select()
    .then((users) => {
      response.status(200).json(users)
    })
    .catch((error) => {
      response.status(404).json({success: 'false'})
    })
})

app.post('/api/v1/users', (request, response) => {
  const { email, password } = request.body
  const user = { email, password }
  database('users').insert(user)
  .then(function() {
    database('users').select()
      .then(function(users) {
        // RESTful requires a 201 on a new resource being created
        response.status(201).json({success: 'true'})
      })
      .catch(function(error) {
        // Spec says 422 this will match RESTful principles as the 201 does
        response.status(422).json({success: 'false'})
      });
  })
})

app.get('/api/secrets/:id', (request, response) => {
  const { id } = request.params
  const message = app.locals.secrets[id]

  if (!message) return response.sendStatus(404)

  response.json({ id, message })
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})
