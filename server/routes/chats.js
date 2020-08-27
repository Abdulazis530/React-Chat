const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat')
const moment = require('moment')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const result = await Chat.find().sort({ createdAt: 1 })
    let data = result.map(field => ({
      _id: field._id,
      id: field.id,
      name: field.name,
      message: field.message,
      date: moment(field.createdAt).format("YYYY-MM-DD"),
      time: moment(field.createdAt).format('h:mm a')
    }))
    res.json(data)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', async (req, res, next) => {
  const { id, name, message } = req.body
  try {
    const data = await Chat.create({ id, name, message })
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const data = await Chat.findOneAndRemove({ id: Number(id) })
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
});
module.exports = router;
