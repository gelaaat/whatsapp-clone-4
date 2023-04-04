import Messages from "../models/Messages.js";
import User from "../models/User.js";

export const sendMessage = async (req, res, next) => {
  const { message, contactId } = req.body
  const { _id:userId } = req.user

  try {

    const user = await User.findById(userId)
    const contact = await User.findById(contactId)
    
    const newMessage = new Messages({
      message,
      date: `${new Date().getHours()}:${new Date().getMinutes()}`,
      transmitterUser: userId,
      receiverUser: contact._id

    })

    await newMessage.save()
    user.messages = user.messages.concat(newMessage)
    contact.messages = contact.messages.concat(newMessage)
    
    await user.save()
    await contact.save()

    res.status(201).send(newMessage)
  } catch (error) {
    res.status(500).json({ msg: 'Something gone wrong sending the message' })
  }
}