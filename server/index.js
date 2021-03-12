const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake-db')
const app = express()

// await mongoose.connect('mongodb+srv://test:testtest@cluster0.stqp1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true
}).then(
  () => {
    const fakeDb = new FakeDb()
    fakeDb.seeDb()
  }
)

app.get('/products', function(req, res){
  res.json({'success': true})
})

const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
  console.log('i am running')
})

// mongodb+srv://test:<password>@cluster0.stqp1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
