const router = require('express').Router();
const { models: { Student, Campus }} = require('../db');
module.exports = router;

router.get('/', async(req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      include: [Student]
    });
    res.json(campuses);
  } catch (err) { next(err) }
})

router.get('/:id', async(req, res, next) => {
  try {
    const id = req.params.id
    const data = await Campus.findOne({
      include: Student,
      where: {
        id: id
      }
    });
    res.json(data);
  } catch (err) { next(err) }
})
