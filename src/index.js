import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import passport from 'passport'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import router from './Routers/index.js'
import './passport/index.js'
import { db } from './db/index.js'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()
dotenv.config()
db()

// Configuracions
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//Set the client
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname, 'client/build')))


// Sessions
const sessionStore = MongoStore.create({
  mongoUrl: process.env.MONGODB_URI,
  dbName: 'whatsapp',
  collectionName: 'sessions'
})

app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // Es posa a true quan estiguem en produccio
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: true
  },
  store: sessionStore
}))

app.use(passport.initialize())
app.use(passport.session())


// Routers
app.use('/api', router)

// Aqui aniria el 404 i el error handling
app.listen(process.env.PORT, () => {
  console.log('Server running on: ', process.env.PORT)
})
