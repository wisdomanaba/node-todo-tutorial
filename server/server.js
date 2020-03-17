const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const app = express()
const PORT = process.env.PORT || 4500

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
      const { text } = req.body
      const todo = new Todo({text})

      todo.save()
      .then( doc => res.send(doc), e => res.status(400).send(e) )
})

app.get('/todos', (req, res) => {
      Todo.find().then(todos => {
            res.send({todos})
      }, (e) => {
            res.status(400).send(e)
            console.log('Unable to fetch data', e)
      })
})

app.get('/todos/:id', (req, res) => {
      const { id } = req.params

      !ObjectID.isValid(id) ? res.status(400).send() :

      Todo.findById(id).then((todo) => {
            !todo ? res.status(400).send() :
            res.send({todo})
      }).catch( e => res.status(400).send())
})


// User route

app.post('/user', (req, res) => {
      const { email } = req.body
      const user = new User({email})

      user.save()
      .then( doc => res.send(doc), e => res.status(400).send(e) )
})


app.listen(PORT, () => console.log(`Started on port: ${PORT}`) )


module.exports = { app }








// _AGb96%A_Ap4LUe


// var otherTodo = new Todo({
//       text: 'Feed the dog',
//       completed: true,
//       completedAt: 123
// })

// otherTodo.save()
// .then( doc => console.log(JSON.stringify(doc, undefined, 2)), e => console.log('Unable to save todo', e))