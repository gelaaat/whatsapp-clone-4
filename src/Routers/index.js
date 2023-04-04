import express from 'express'
import passport from 'passport'
import { isAuth } from '../middlewares/isAuth.js'
import { createUser } from '../controllers/createUser.js'
import { sendContactRequest } from '../controllers/sendContactRequest.js'
import { getContactMessages } from '../controllers/getContactMessages.js'
import { sendMessage } from '../controllers/sendMessage.js'

const router = express.Router()

// Sessions
router.post('/login-local', passport.authenticate('local', { failureRedirect: '/login-failure' }), (req, res, next) => {
  res.status(200).json({ msg: 'Login Successfull' })
})

router.delete('/logout', isAuth, (req, res) => {
  req.logOut(err => {
    if (err) { return next(err) }
    res.status(200).json({ msg:"Logout succesfull" })
  })
  
})

router.post('/register-local', createUser)


//Contacts
router.post('/addContact', isAuth, sendContactRequest)

router.post('/sendMessage', isAuth, sendMessage)


router.get('/getContactMessages', isAuth, getContactMessages)


export default router
