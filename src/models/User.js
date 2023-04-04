import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  hash: { type: String, require: true },
  contacts: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  conversations: [{
    type: Schema.ObjectId,
    ref: 'Conversation'
  }],
  pendingRequestContact: [{
    type: Schema.ObjectId,
    ref: 'User'
  }]
})

export default model('User', UserSchema)
