const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

morgan.token('body', (request) => {
  return JSON.stringify(request.body)
})
app.use(morgan(':method :url :status :response-time ms :body'))

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456'
  },
  {
    id: 2,
    name: 'Ada Loelace',
    number: '39-44-234345'
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendick',
    number: '39-23-6423122'
  }
]

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map(person => person.id)) : 0
  const randomId = Math.floor(Math.random() * (1000 - maxId) + maxId)

  return randomId + 1
}

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if(!person) {
    return response.status(400).json({
      error: 'There is no person you want to see!'
    })
  }

  response.status(200).json(person)
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body) {
    return response.status(400).json({
      error: 'Your request is invalid! Sorry please try it again.'
    })
  }

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: `Your request is not enough imformation to add new person.`
    })
  }

  if (persons.find(person => person.name === body.name)) {
    return response.status(400).json({
      error: `Name must be unique.`
    })
  }


  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)

  response.json(person)
})

app.get('/info', (request, response) => {
  const totalNumber = persons.length
  const date = new Date()

  response.send(`<p>Phonebook has info for ${totalNumber} people<p><p>${date}<p>`)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(reqeust.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
