const express = require('express')
const { ConnectDB } = require('./Database')
const { appRoutes } = require('./routes/dictionary')
const cors = require('cors');
const port = process.env.PORT || 8080


const app = express()

app.use(cors()); // it allows use to share data from one application to other

app.use(express.json()); // it converts json file to object or array or string

app.use(appRoutes) // we connect our routes with app





ConnectDB().then(()=>{

    app.listen(port,()=>{ // with this we say in which port i want to run our server

        console.log(`server is running at port ${port}..`)

    })
}).catch((err)=>{

    console.log(err)

})




