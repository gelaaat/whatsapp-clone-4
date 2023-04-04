import Conversation from "../models/Conversation.js";
import Messages from "../models/Messages.js";

export const sendMessage = async (req, res, next) => {
  const { message, conversationId } = req.body
  const { _id:userId } = req.user

  try {
    const conversation = await Conversation.findById(conversationId)

    const receiver = JSON.stringify(userId) === JSON.stringify(conversation.users[0]) ? conversation.users[1] : userId

    const newMessage = new Messages({
      message,
      date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      transmitterUser: userId,
      receiverUser: receiver
    })

    await newMessage.save()
    
    conversation.messages = conversation.messages.concat(newMessage)

    await conversation.save()

    res.status(201).send(conversation)
  } catch (error) {
    res.status(500).json({ msg: 'Something gone wrong sending the message' })
  }
}