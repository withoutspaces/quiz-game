const router = require('express').Router()
const Questions = require('../models/Questions')

//rotas
router.get('/', async (req, res) => {
  try {
    const questions = await Questions.find({})
    res.status(200).json(questions)
  } catch (error) {
    res.status(400).json({
      error: error
    })
  }
  // return res.status(200).json({ message: 'Tá ok!' })
})

router.post('/create', async (req, res) => {
  try {
    const question = await Questions.create(req.body)
    res.status(201).json({ message: 'Cadastrada com sucesso!' })
  } catch (error) {
    res.send({
      message: 'Creation failed',
      error: error
    })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await Questions.deleteOne({ _id: id })
    res.status(200).json({ message: 'Questão deletata com sucesso' })
  } catch (error) {
    res.status(422).json({ message: 'A operação falhou', error: error })
  }
})

module.exports = app => app.use('/questions', router)
