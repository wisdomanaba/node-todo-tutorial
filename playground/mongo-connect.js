const {MongoClient, ObjectID} = require('mongodb')  // const MongoClient = require('mongodb').MongoClient

const URI = 'mongodb://localhost:27017'  // Connection URL

const dbName = 'TodoApp'  // Database Name

MongoClient.connect(URI, (err, client) => {
      if(err) {
            return console.log('Unable to connect to the server...')
      }

      console.log('Connected to MongoDB server')

      const db = client.db(dbName)

      // db.collection('Todos').insertOne({
      //       text: 'Something to do',
      //       completed: false
      // }, (err, result) => {
      //       if(err){
      //             return console.log('Unable to connect to insert todo', err)
      //       }

      //       console.log(JSON.stringify(result.ops, undefined, 2))
      // })


      // db.collection('Users').insertOne({
      //       name: 'Don Joe',
      //       age: '30',
      //       location: 'Califonia'
      // }, (err, result) => {
      //       if(err){
      //             return console.log('Unable to insert user', err)
      //       }
      //       console.log(result.ops[0]._id.getTimestamp())
      // })


      client.close()
})