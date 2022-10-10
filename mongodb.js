// CRUD Create Read Update Delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName)

    
    
    
    // db.collection('users').insertOne({
    //     name: 'Rynta',
    //     age: 29
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user'); 
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'working',
    //         completed: true
    //     },
    //     {
    //         description: 'learning',
    //         completed: true
    //     },
    //     {
    //         description: 'sleeping',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.insertedCount, result.insertedIds);
    // })
    
    // db.collection('tasks').findOne({ _id: new mongodb.ObjectId("633573a822f8de1a6c9a047b") }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log(tasks);
    // })
})