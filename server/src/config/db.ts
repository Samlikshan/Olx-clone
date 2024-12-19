import mongoose from 'mongoose'

const DB_URL: string = process.env.DB_URL || 'mongodb://127.0.0.1:27017/Olx'

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL)
    console.log(`Database connected`)
  } catch (error) {
    console.log('Error connecting mongoose', error)
  }
}
