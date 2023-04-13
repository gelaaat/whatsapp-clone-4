import express from 'express'
import passport from 'passport'
import { isAuth } from '../middlewares/isAuth.js'
import { createUser } from '../controllers/createUser.js'
import { sendContactRequest } from '../controllers/sendContactRequest.js'
import { getConversation } from '../controllers/getConversation.js'
import { sendMessage } from '../controllers/sendMessage.js'
import { acceptRequestContact } from '../controllers/acceptContactRequest.js'
import { loginSuccessfull } from '../controllers/loginSuccessfull.js'

const router = express.Router()

// Sessions
router.post('/login-local', passport.authenticate('local', {failureRedirect: '/api/failureLogin', session: true}), loginSuccessfull)

router.get('/api/failureLogin', (req, res, next) => {
  res.status(400).json({ message: 'Username or password are incorrect' })
})

router.delete('/logout', isAuth, (req, res) => {
  req.logOut(err => {
    if (err) { return next(err) }
    console.log('user logout correcte')
    res.status(200).json({ message:"Logout succesfull" })
  })
  
})

router.post('/register-local', createUser)


//Contacts
router.post('/addContact', isAuth, sendContactRequest)
router.post('/acceptContactRequest', isAuth, acceptRequestContact)


//Messages
router.post('/sendMessage', isAuth, sendMessage)
router.get('/getConversation', isAuth, getConversation)


export default router
