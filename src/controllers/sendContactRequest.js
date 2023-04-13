import User from "../models/User.js";

export const sendContactRequest = async (req, res, next) => {
  const { _id: userId } = req.user
  const { username } = req.body


  try {
    const contact = await User.findOne({ username: username })
    const user = await User.findById(userId)
    console.log(contact)

    if (!contact) {
      return res.status(404).json({ message: 'This contacts not exists' })
    } else if (contact.pendingRequestContacts.includes(userId)) {
      console.log('Request already sended')
      res.status(208).json({ message: 'Request already sended' })
    }    
    else {

      contact.pendingRequestContacts.push(userId)
      user.sendedRequestContacts.push(contact._id)
      
      await user.save()
      await contact.save()

      res.status(201).json({ message: 'Request sended successfully' })
    }

    

  } catch (error) {
    console.log(error)
    next(new Error('Something gone wrong sending de friend request'))
  }
}