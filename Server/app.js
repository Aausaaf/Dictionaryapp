const express = require('express')
const { ConnectDB } = require('./Database')
const { appRoutes } = require('./routes/dictionary')
const cors = require('cors');
const port = process.env.PORT || 8080


const app = express()

app.use(cors());

app.use(express.json());

app.use(appRoutes)





ConnectDB().then(()=>{

    app.listen(port,()=>{

        console.log(`server is running at port ${port}..`)

    })
}).catch((err)=>{

    console.log(err)

})




