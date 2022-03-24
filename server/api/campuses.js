const router = require('express').Router();
const { models: { Student, Campus }} = require('../db');
module.exports = router;

router.get('/', async(req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) { next(err) }
})
