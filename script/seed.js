'use strict'

const {db, models: {User, Student, Campus} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

const studentTestData = [
  {
    firstName: 'Freddy',
    lastName: 'G',
    email: 'me@me.com',
    gpa: 3.4
  },
  {
    firstName: 'Charlie',
    lastName: 'Ackerman',
    email: 'CAckerman@me.com',
    gpa: 3.7
  },
  {
    firstName: 'Steph',
    lastName: 'Chane',
    email: 'SChane@me.com',
    gpa: 3.9
  }
]

const campusTestData = [
  {
    name: 'City College',
    address: '123 convent ave',
    description: 'a school I went to'
  },
  {
    name: 'York College',
    address: '123 york ave',
    description: 'Some School around'
  },
  {
    name: 'Hostos Community College',
    address: 'grand concourse ave',
    description: 'a bronx community college'
  }
]

async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')
  // Students
  // const students = await Promise.all([
  //   Student.create({
  //     firstName: 'Freddy',
  //     lastName: 'G',
  //     email: 'me@me.com',
  //     gpa: 3.4
  //   }),
  //   Student.create({
  //     firstName: 'Charlie',
  //     lastName: 'Ackerman',
  //     email: 'CAckerman@me.com',
  //     gpa: 3.7
  //   }),
  //   Student.create({
  //     firstName: 'Steph',
  //     lastName: 'Chane',
  //     email: 'SChane@me.com',
  //     gpa: 3.9
  //   }),
  // ])

  // Campuses
  // const campuses = await Promise.all([
  //   Campus.create({
  //     name: 'City College',
  //     address: '123 convent ave',
  //     description: 'a school I went to'
  //   }),
  //   Campus.create({
  //     name: 'York College',
  //     address: '123 york ave',
  //     description: 'Some School around'
  //   }),
  //   Campus.create({
  //     name: 'Hostos Community College',
  //     address: 'grand concourse ave',
  //     description: 'a bronx community college'
  //   })
  // ])

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])
  await Promise.all(campusTestData.map(campus => Campus.create(campus)))
  const students = await Promise.all(studentTestData.map(student => Student.create(student))).then(values => console.log(values))


  // const student1 = await Student.findByPk(1)
  // await student1.setCampus(1)
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
