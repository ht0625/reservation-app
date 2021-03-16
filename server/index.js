const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/dev')
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products')
const userRoutes = require('./routes/users')


// await mongoose.connect('mongodb+srv://test:testtest@cluster0.stqp1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  // useFindAndModify: false,

}).then(
  () => {
    const fakeDb = new FakeDb()
    fakeDb.initDb()
  }
)

const app = express()
app.use(bodyParser.json())

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/users', userRoutes)

// app.get('/products', function(req, res){
//   res.json({'success': true})
// })

const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
  console.log('i am running')
})

// mongodb+srv://test:<password>@cluster0.stqp1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
