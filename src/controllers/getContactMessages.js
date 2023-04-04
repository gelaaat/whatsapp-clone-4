import User from "../models/User.js"

export const getContactMessages = async (req, res, next) => {
  const { id } = req.user
  const { contactId, limit } = req.body

  try {
    const contact = await User.findById(contactId)
    
    const userMessages = await User.findById(id).populate('messages').find({
      transmitterUser: req.user,
      receiverUser: contact
    }).limit(limit)

    res.stauts(200).json(userMessages)

  } catch (error) {
    res.status(404).json({ msg: 'Something gone wrong retrieving the user messages' })
  }
  
}
