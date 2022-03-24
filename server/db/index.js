//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Student = require('./models/Student');
const Campus = require('./models/Campus')

//associations could go here!
Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  db,
  models: {
    User,
    Student,
    Campus
  },
}
