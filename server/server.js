const express = require('express')
const bodyParser = require('body-parser')


const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const app = express()
const PORT = process.env.PORT || 4500

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
      const todo = new Todo({
            text: req.body.text
      })

      todo.save()
      .then( doc => res.send(doc), e => res.status(400).send(e) )
})


app.listen(PORT, () => console.log(`Started on port: ${PORT}`) )













// var otherTodo = new Todo({
//       text: 'Feed the dog',
//       completed: true,
//       completedAt: 123
// })

// otherTodo.save()
// .then( doc => console.log(JSON.stringify(doc, undefined, 2)), e => console.log('Unable to save todo', e))