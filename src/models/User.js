import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  hash: { type: String, require: true },
  contacts: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  messages: [{
    type: Schema.ObjectId,
    ref: 'Messages'
  }],
  pendingRequestContact: [{
    type: Schema.ObjectId,
    ref: 'User'
  }]
})

export default model('User', UserSchema)
