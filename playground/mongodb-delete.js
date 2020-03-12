const { MongoClient, ObjectID } = require('mongodb')

const URL = 'mongodb://localhost:27017'  // Connection URL

const dbName = 'TodoApp' // Database Name

MongoClient.connect(URL, (err, client) => {
      if (err) throw err
      console.log('Connected to MongoDB server')

      const db = client.db(dbName)



      // deleteMany:- This will let us target multiple documents and remove them

      // db.collection('Todos').deleteMany({ text: 'Go Wash the plates' })
      // .then( res => console.log(res) )

      

      // deleteOne:- This will let us target one document and remove it

      // db.collection('Todos').deleteOne({ text: 'Go Wash the plates' })
      // .then( res => console.log(res) )



      // findOneAndDelete:- This finds the first document where values are the same and deletes it

      // db.collection('Todos').findOneAndDelete({ completed: false })
      // .then( res => console.log(res) )


      // db.collection('Todos').deleteMany({ text: 'Go Wash the plates'})
      // .then( res => console.log(res) )
      
      // db.collection('Todos').findOneAndDelete({ _id: ObjectID('5e691d367048231948fd14f0') })
      // .then( res => console.log(res) )

      // db.collection('Todos').deleteOne({ text: 'Take a shower' })
      // .then( res => console.log(res) )


})