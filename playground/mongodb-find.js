const {MongoClient, ObjectID} = require('mongodb')  // const MongoClient = require('mongodb').MongoClient

const URL = 'mongodb://localhost:27017'  // Connection URL

const dbName = 'TodoApp'  // Database Name

MongoClient.connect(URL, (err, client) => {
      if(err) {
            return console.log('Unable to connect to the server...')
      }
      console.log('Connected to MongoDB server')


      const db = client.db(dbName)

      // To get all datas in the database

      // db.collection('Todos').find().toArray().then((docs) => {
      //       console.log('Todos')
      //       console.log(JSON.stringify(docs, undefined, 2))
      // }, (err) => {
      //       console.log('Unable to fetch todos', err)
      // })



      // To get all datas that are completed

      // db.collection('Todos').find({ completed: true }).toArray().then((docs) => {
      //       console.log('Todos')
      //       console.log(JSON.stringify(docs, undefined, 2))
      // }, (err) => {
      //       console.log('Unable to fetch todos', err)
      // })




      // To get datas by ID

      // db.collection('Todos').find({
      //        _id: new ObjectID('5e691d367048231948fd14f0') 
      //       }).toArray().then((docs) => {
      //       console.log('Todos')
      //       console.log(JSON.stringify(docs, undefined, 2))
      // }, (err) => {
      //       console.log('Unable to fetch todos', err)
      // })


      db.collection('Todos').find().count()
      .then(count => console.log(`Todos count: ${count}`),
      err => console.log('Unable to fetch todos', err))

      db.collection('Users').count()
      .then(count => console.log(`Users count: ${count}`),
      err => console.log(`Unable to fetch Users`, err))


      // client.close()
})