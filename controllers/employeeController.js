const Employee = require('../models/employee')

const getEmployee = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}

const postEmployee = async (req, res) => {
    const body = req.body
    let msg = 'Employee inserted successfully'
    try {
        const employee = new Employee(body)
        await employee.save()
    } catch (error){
        msg= error
    }
    res.json({msg:msg})
}

module.exports = {
    getEmployee,
    postEmployee
}