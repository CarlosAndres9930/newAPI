const {Schema, model} = require('mongoose')

const employeeSchema = new Schema({
    document:{
        type: String,
        unique: true,
        requiered:[true, 'The document is required'],
        maxlength: [10, 'Max 10 characters']
    },
    name: {
        type: String,
        required: [true, 'The name is required'],
        minlength: [3, 'Min 3 characters'],
        maxlength: [50, 'Max 50 characters']
    },
    hiredDate: {
        type: Date,
        required: [true, 'The hired date is required']
    },
    firedDate:{
        type: Date,
        required: [true, 'The fired date is required']
    },
    salary: {
        type: Number,
        required: [true, 'The salary is required'],
        min: [1000, 'Min 1000'],
        max: [100000, 'Max 100000']
    },
    workedDays: {
        type: Number,
        required: [true, 'The worked days are required'],
        min: [1, 'Min 1']
    }
})

module.exports = model('Employee', employeeSchema, 'employee')