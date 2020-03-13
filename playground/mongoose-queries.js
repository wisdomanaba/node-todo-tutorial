const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')


const todoId = '5e6ab715d3865913706c206d'
const userId = '5e6b66381f30122680e66ad7'

!ObjectID.isValid(todoId || userId ) ? console.log('Id not valid') :

// Todo.find({ _id: todoId }).then( todos => console.log('Todos:', todos) )

// Todo.findOne({ _id: todoId }).then( todo => console.log('Todo:', todo) )

// Todo.findById(todoId).then( todo => {
//       !todo ? console.log('Id not found') :
//       console.log('Todo by ID:', todo)
// } ).catch( e => console.log(e) )

User.findById(userId).then( user => {
      !user ? console.log('Id not found') :
      console.log('User by ID:', user)
} ).catch( e => console.log(e) )