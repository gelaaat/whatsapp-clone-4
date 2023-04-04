import User from "../models/User.js";

export const sendContactRequest = async (req, res, next) => {
  const { _id: userId } = req.user
  const { contactId } = req.body

  try {
    const contact = await User.findById(contactId)

    if(!contact) { return res.status(404).json({ msg:'This contacts not exists' }) }

    contact.pendingRequestContact = contact.pendingRequestContact.concat(userId)
    await contact.save()

    res.status(201).json({ msg: 'Request sended successfully' })

  } catch (error) {
    next(new Error('Something gone wrong sending de friend request'))
  }
}