const MongoClient = require('mongodb').MongoClient
const uri = process.env.DB
const client = new MongoClient(uri, { useNewUrlParser: true })

export const addData = (data) => {
  client.connect((err) => {
    if (err) {
      return err
    }

    try {
      const collection = client.db('portfolio-db').collection('messages')
      collection.insertOne(data)
      client.close()
    } catch (error) {
      client.close()
      return error
    }
  })
}
