import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// Database connectie
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pjotters-vibe')

// Routes importeren
import authRoutes from './routes/auth'
import videoRoutes from './routes/videos'

app.use('/api/auth', authRoutes)
app.use('/api/videos', videoRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server draait op poort ${PORT}`)
}) 