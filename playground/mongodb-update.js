const { MongoClient, ObjectID } = require('mongodb')

const URL = 'mongodb://localhost:27017'  // Connection URL

const dbName = 'TodoApp'  // Database Name

MongoClient.connect(URL, (err, client) => {
      if (err) throw err
      console.log('Connected to MongoDB server')

      const db = client.db(dbName)

      // db.collection('Todos').findOneAndUpdate({ _id: ObjectID('5e6a23fd9b37dd1d74059032') }, { 
      //       $set: { 
      //             completed: true 
      //       }
      //  }, { returnOriginal: false })
      //  .then( res => console.log(res) )


      db.collection('Users').findOneAndUpdate({ _id: ObjectID('5e6911562ab056256440a819') }, {
            $set : {
                  name: 'Dev' //The $set operator replaces the value of a field with the specified value
            },
            $inc: {
                  age: -10 // The $inc operator increments a field by a specified value
            }
      }, { returnOriginal: false })
      .then( res => console.log(res) )


})