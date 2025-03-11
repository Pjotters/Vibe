import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import bcrypt from 'bcryptjs'

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body

    const user = new User({
      username,
      email,
      password,
    })

    await user.save()

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'jouw-geheime-key',
      { expiresIn: '24h' }
    )

    res.status(201).json({ token })
  } catch (error) {
    res.status(400).json({ error: 'Registratie mislukt' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ error: 'Gebruiker niet gevonden' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ error: 'Ongeldig wachtwoord' })
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'jouw-geheime-key',
      { expiresIn: '24h' }
    )

    res.json({ token })
  } catch (error) {
    res.status(400).json({ error: 'Login mislukt' })
  }
})

export default router 