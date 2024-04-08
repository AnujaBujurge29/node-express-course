const express = require('express');
const router = express.Router()

const { getPeople, addPerson, updatePerson, deletePerson } = require('../controllers/people')


// Endpoint to return all people
router.get('/', getPeople);
// Endpoint to add a new person
router.post('/', addPerson);


router.put('/:id', updatePerson)

router.delete('/:id', deletePerson)

module.exports = router