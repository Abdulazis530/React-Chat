const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const data = await Chat.find()
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
