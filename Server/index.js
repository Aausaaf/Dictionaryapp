const express = require('express')
const { ConnectDB } = require('./Database')
const { appRoutes } = require('./routes/dictionary')
const cors = require('cors');



const app = express()

app.use(cors());

app.use(express.json());

app.use(appRoutes)





ConnectDB().then(()=>{

    app.listen(8080,()=>{

        console.log("server is running at port 8080..")

    })
}).catch((err)=>{

    console.log(err)

})




