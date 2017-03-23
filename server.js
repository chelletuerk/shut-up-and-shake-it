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

app.get('/api/v1/comments', (request, response) => {
  database('comments').select()
  .then((comments) => {
    response.status(200).json(comments)
  })
  .catch((error) => {
    response.status(404).json({success: 'false'})
  })
})

app.get('/api/v1/favorites', (request, response) => {
  database('favorites').select()
  .then((favorites) => {
    response.status(200).json(favorites)
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
        response.status(201).json({success: 'true'})
      })
      .catch(function(error) {
        response.status(422).json({success: 'false'})
      });
  })
})

app.post('/api/v1/comments', (request, response) => {
  const { body, songKickVenueId, userId } = request.body
  const comment = { body, songKickVenueId, userId }
  database('comments').insert(comment)
  .then(function() {
    database('comments').select()
      .then(function(comments) {
        response.status(201).json({success: 'true'})
      })
      .catch(function(error) {
        response.status(422).json({success: 'false'})
      });
  })
})

app.post('/api/v1/favorites', (request, response) => {
  const { rating, songKickVenueId, userId } = request.body
  const comment = { rating, songKickVenueId, userId }
  database('favorites').insert(comment)
  .then(function() {
    database('favorites').select()
      .then(function(comments) {
        response.status(201).json({success: 'true'})
      })
      .catch(function(error) {
        response.status(422).json({success: 'false'})
      });
  })
})

app.post('/api/v1/comments/:userId/:venueId', (request, response) => {
  const { userId, venueId } = request.params
  const { body, songKickVenueId } = request.body
  const newComment = {
    body,
    userId,
    songKickVenueId:venueId,
    created_at: new Date,
    updated_at: new Date,
  }

  database('comments').insert(newComment)
  .then(()=> {
    database('comments').where('userId', userId).select()
    .then(function(comments) {
      response.status(201).json({success: 'true'})
    })
    .catch(function(error) {
      response.status(422).json({success: 'false'})
    });
  })
})

app.delete('/api/v1/users/:id', (request, response)=> {
  const { id } = request.params
  database('users').where('id', id).select()
    .then((comment)=> {
      database('users').where('id', id).select().del()
      .then(function(favorites) {
        response.status(201).json({success: 'true'})
      })
      .catch(function(error) {
        response.status(422).json({success: 'false'})
      })
  })
})

app.delete('/api/v1/comments/:id', (request, response)=> {
  const { id } = request.params
  database('comments').where('id', id).select()
    .then((comment)=> {
      database('comments').where('id', id).select().del()
      .then(function(comments) {
        response.status(201).json({success: 'true'})
      })
      .catch(function(error) {
        response.status(422).json({success: 'false'})
      })
    })
})

app.delete('/api/v1/favorites/:id', (request, response)=> {
  const { id } = request.params
  database('favorites').where('id', id).select()
    .then((comment)=> {
      database('favorites').where('id', id).select().del()
      .then(function(favorites) {
        response.status(201).json({success: 'true'})
      })
      .catch(function(error) {
        response.status(422).json({success: 'false'})
      })
  })
})

// app.patch('/api/users/:id', (request, response)=> {
//   const { id } = request.params
//   database('users').where('id', id).select()
//     .then((user)=> {
//       let email = request.body.email
//       database('users').where('id', id).select().update({ email })
//         .then((users)=> {
//           response.status(200).json(users)
//         })
//     })
//     .catch((error)=> {
//       console.log(error)
//     })
// })

// app.patch('/api/comments/:id', (request, response)=> {
//   const { id } = request.params
//   const { body } = request.body
//   database('comments').where('id', id).select()
//     .then((comment)=> {
//       database('comments').where('id', id).select().update({ body })
//       .then(function(comments) {
//         response.status(201).json({success: 'true'})
//       })
//       .catch(function(error) {
//         response.status(422).json({success: 'false'})
//       })
//   })
// })

// app.patch('/api/comments/:id', (request, response)=> {
//   const { id } = request.params
//   database('comments').where('id', id).select()
//     .then((comments)=> {
//       const body = request.body.body
//       database('comments').where('id', id).select().update({ body })
//         .then((comments)=> {
//           response.status(200).json(comments)
//         })
//     })
//     .catch((error)=> {
//       console.log(error)
//     })
// })









app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})
