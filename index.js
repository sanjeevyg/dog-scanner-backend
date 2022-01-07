const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const bodyParser = require("body-parser")
app.use(bodyParser.json())


const port = process.env.PORT || 3000

app.get('/', (_, response) => {
    response.status(200).send({message: 'hello wrold'})
})
app.listen(port, () => console.log(`listening to port ${port}`))