import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  hash: { type: String, require: true },
  image: { type: String },
  contacts: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  conversations: [{
    type: Schema.ObjectId,
    ref: 'Conversation'
  }],
  pendingRequestContacts: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  sendedRequestContacts: [{
    type: Schema.ObjectId,
    ref: 'User'
  }]
})

export default model('User', UserSchema)
