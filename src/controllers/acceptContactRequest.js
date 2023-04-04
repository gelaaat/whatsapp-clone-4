import Conversation from "../models/Conversation.js";
import User from "../models/User.js";

export const acceptRequestContact = async (req, res, next) => {
  const { _id: userId } = req.user
  const { contactId } = req.body

  try {
    const contact = await User.findById(contactId)

    if(!contact) { return res.status(404).json({ msg:'Contact not found' }) }

    const user = await User.findById(userId)

    user.contacts = user.contacts.concat(contact)
    contact.contacts = contact.contacts.concat(user)

    

    const newConversation = new Conversation({
      dateInitial: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      users: [user, contact]
    })

    user.conversations = user.conversations.concat(newConversation)
    contact.conversations = contact.conversations.concat(newConversation)

    await user.save()
    await contact.save()
    await newConversation.save()
    
    res.status(201).json({ msg: 'Request accepted Succesfully' })
  } catch (err) {
    res.status(500).json({ msg: 'Something gone wrong accepting the request' })
  }
}