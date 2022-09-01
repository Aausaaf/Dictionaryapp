const express = require('express')
const { getdata, postdata, serachdata } = require('../handlers/dictionary')

const appRoutes = express.Router()

appRoutes.get("/getdata",getdata) // end point for get request (getting words)

appRoutes.post("/postdata",postdata) // end point for post request (adding word)
appRoutes.get("/search/:name",serachdata)


module.exports ={
    appRoutes
}