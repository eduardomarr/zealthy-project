var express = require('express');
var router = express.Router();
const { user } = require('../models');

router.post('/create', async (req, res) => {
  try {
    const { email, password, about, birthday, address } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const newUser = await user.create({
      email,
      password,
      about,
      birthday,
      address,
    });

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await user.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the users' });
  }
});

module.exports = router;
