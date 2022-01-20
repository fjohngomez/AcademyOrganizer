const router = require('express').Router();
const { models: { Student, Campus }} = require('../db')
module.exports = router;

router.get('/', async(req, res, next) => {
  try {
    const students = await Student.findAll({
      include: [Campus]
    });
    res.json(students)
  } catch (err) { next(err)}
})
