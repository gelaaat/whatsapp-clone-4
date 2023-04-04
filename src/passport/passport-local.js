import { verifyPassword } from '../utils/verifyPassword.js'
import User from '../models/User.js'

export default function verifyPassportLocal(username, password, done) {
  User.findOne({ username }).then((user) => {
    if (!user) { return done(null, false) }

    if (!verifyPassword(user, password)) { return done(null, false) }
    
    return done(null, user)
  })
    .catch(err => {
      return done(err)
  })
}