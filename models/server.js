const express = require('express')
require('dotenv').config()
const dbConnection = require('../database/config')
const {getEmployee, postEmployee} = require('../controllers/employeeController')
class Server {
    constructor(){
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathEmployee = '/api/Employee'
        this.route()
    }
    async dbConnection(){
        await dbConnection()
    }
    route(){
        this.app.use(express.json())
        this.app.get(this.pathEmployee, getEmployee)
        this.app.post(this.pathEmployee, postEmployee)
    }
    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`)
        })
    }
}

module.exports = Server