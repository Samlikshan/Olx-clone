import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db'
import morgan from 'morgan'
dotenv.config()


import userRouter from './routes/userRoutes'


const app = express()

const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/', userRouter)

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`)
})
connectDB()
