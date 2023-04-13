import Conversation from "../models/Conversation.js";
import User from "../models/User.js";

export const acceptRequestContact = async (req, res, next) => {
  const { _id: userId } = req.user
  const { contactId } = req.body

  try {

    const contact = await User.findById(contactId)    
    const user = await User.findById(userId)
    
    if (!contact) { return res.status(404).json({ message: 'Contact not found' }) }
    else if (!user.pendingRequestContacts.includes(contact._id)) {
      res.status(400).json({
        message: 'You don\'t have his request friend or you just already accepted'
      })
    }
    else {
     
      user.contacts.push(contact)
      contact.contacts.push(user)           

      user.pendingRequestContacts = user.pendingRequestContacts.filter(request => {
        return !request._id.equals(contact._id)
      })   

      contact.sendedRequestContacts = contact.sendedRequestContacts.filter(request => {
        return !request._id.equals(user._id)
      })

      const newConversation = new Conversation({
        dateInitial: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        users: [user, contact]
      })

      user.conversations.push(newConversation)
      contact.conversations.push(newConversation)

      await user.save()
      await contact.save()
      await newConversation.save()

      res.status(201).json({
        conversation: newConversation._id
      })
    }

  } catch (err) {
    res.status(500).json({ message: 'Something gone wrong accepting the request' })
  }
}