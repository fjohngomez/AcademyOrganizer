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

router.get('/:id', async(req, res, next) => {
  try {
    const id = req.params.id
    const data = await Student.findOne({
      include: Campus,
      where: {
        id: id
      }
    });
    res.json(data)
   } catch (err) { next(err) }
})
