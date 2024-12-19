import jwt from 'jsonwebtoken'

import { payload } from '../Types/Types'
const SECRET_KEY = process.env.SECRET_KEY

const options = {
  expiresIn: '7d'
}

export const generateToken = async (payload: payload) => {
  const token = jwt.sign(payload, SECRET_KEY as string, options);
  return token
}

