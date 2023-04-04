import { Schema, model } from 'mongoose'

const ConversationSchema = new Schema({
  dateInitial: { type: String, require: true },
  users: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  messages: [{
    type: Schema.ObjectId,
    ref: 'Messages'
  }]
})

export default model('Conversation', ConversationSchema)
