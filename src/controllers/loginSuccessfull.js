import User from "../models/User.js"

export const loginSuccessfull = async (req, res, next) => {
  
  try {

    const user = await User.findById(req.user._id)
      .populate('contacts', { hash: 0 })
      .populate('pendingRequestContacts', { hash: 0 })
      .populate('sendedRequestContacts', { hash: 0 })
    
    
    res.status(200).json({
      username: user.username,
      email: user.email,
      contacts: user.contacts,
      conversations: user.conversations,
      pendingRequestContacts: user.pendingRequestContacts,
      sendedRequestContacts: user.sendedRequestContacts,
      image: user.image
    })

  } catch (error) {
    res.status(500).json({
      message: 'Something gone wrong login the user'
    })
  }

  
}