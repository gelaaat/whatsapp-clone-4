import Conversation from "../models/Conversation.js"

export const getConversation = async (req, res, next) => {
  const { _id:userId } = req.user
  let contactId;
  let limit;

  //This is for handling the requests from fetch and axios
  if (Object.keys(req.body).length > 0) {
    contactId = req.body.contactId || null
    limit = req.body.limit || 10
  } else {
    contactId = req.query.contactId || null
    limit = req.query.limit || 10
  }

  try {

    const conversationNew = await Conversation.findOne({ users: { $all: [userId, contactId] } })
      .populate({
        path: 'messages',
        options: {
          limit: limit,
          sort: { date: 1 }
        }
      })

    console.log(conversationNew)
    
    res.status(200).json(conversationNew)

  } catch (error) {
    res.status(404).json({
      message: 'Something gone wrong retrieving the user messages',
      error
    })
  }
  
}
