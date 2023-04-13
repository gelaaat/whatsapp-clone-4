import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const createUser = async (req, res, next) => {
  const { username, email, password } = req.body

  // Falta validacions dels camps
  const salt = 10
  const hash = await bcrypt.hash(password, salt)

  try {
    const existsUser = await User.find({ username: username })
    
    if (existsUser.length !== 0) {
      res.status(400).json({
        message: 'This username already exists'
      })
      return
    }

    const newUser = new User({
      username,
      email,
      hash
    })

    const savedUser = await newUser.save()
    
    res.status(201).json({
      username: savedUser.username,
      email: savedUser.email,
      contacts: savedUser.contacts,
      conversations: savedUser.conversations,
      pendingRequestContacts: savedUser.pendingRequestContacts,
      sendedRequestContacts: savedUser.sendedRequestContacts

    })

  } catch (error) {
    next(new Error('Something gone wrong creating the new user'))
  }
}
