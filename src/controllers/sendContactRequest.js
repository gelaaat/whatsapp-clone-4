import User from "../models/User.js";

export const sendContactRequest = async (req, res, next) => {
  const { _id: userId } = req.user
  const { contactId } = req.body

  try {
    const contact = await User.findById(contactId)

    if(!contact) { return res.status(404).json({ msg:'Contact not found' }) }

    const updatedUser = await User.findByIdAndUpdate(userId, {
      contacts: contact
    })

    res.status(201).json({ msg: 'Request sended Succesfull' })
  } catch (err) {
    res.status(500).json({ msg: 'Something gone wrong sending the request' })
  }
  

}