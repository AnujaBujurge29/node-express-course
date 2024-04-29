const { people } = require('../data')


const getPeople = (req, res) => {
    res
        .status(200)
        .json({
            success: true,
            data: people
        })
}

const addPerson = (req, res) => {
    if (!req.body.name) {
        return res.status(400)
            .json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201)
        .json({ success: true, name: req.body.name });
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res
            .status(400)
            .json({ sucess: false, message: `No person found with ID: ${id}` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res
        .status(200)
        .json({ success: true, name: newPeople });
}

const deletePerson = (req, res) => {
    const { id } = req.params
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res
            .status(400)
            .json({ sucess: false, message: `No person found with ID: ${id}` })
    }
    const newPeople = people.filter((person) => person.id !== Number(id))
    return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
    getPeople, addPerson, updatePerson, deletePerson
}