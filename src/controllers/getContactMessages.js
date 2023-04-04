import Conversation from "../models/Conversation.js"

export const getContactMessages = async (req, res, next) => {
  const { _id:userId } = req.user
  const { conversationId, limit } = req.body


  try {
    
    const conversation = await Conversation.findById(conversationId).populate({
      path: 'messages',
      options: {
        limit: limit,
        sort: { date: 1 }
      }
    })

    res.status(200).json(conversation)

  } catch (error) {
    res.status(404).json({
      msg: 'Something gone wrong retrieving the user messages',
      error
    })
  }
  
}
