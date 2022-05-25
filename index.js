require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')

const url = process.env.DATABASE_URL
mongoose.connect(url)
    .then(() => console.log('DB connected!'))
    .catch(err => console.log(err))

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)

app.listen(process.env.PORT || 3000, () => console.log('listening on PORT 3000'))