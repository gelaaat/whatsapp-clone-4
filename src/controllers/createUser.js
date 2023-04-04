import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const createUser = async (req, res, next) => {
  const { username, email, password } = req.body

  // Falta validacions dels camps
  const salt = 10
  const hash = await bcrypt.hash(password, salt)

  try {
    const newUser = new User({
      username,
      email,
      hash
    })

    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    next(new Error('Something gone wrong creating the new user'))
  }
}
