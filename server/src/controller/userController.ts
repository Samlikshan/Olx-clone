import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/userSchema";
import { generateToken } from "../helpers/jwtHelper";

export interface UserType {
  _id: string
  email: string;
  password: string;
}

export const register = async (req: Request, res: Response): Promise<any> => {
  console.log(req.body, 'req')
  const { email, password }: UserType = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields must be filled" });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ error: "Password must be at least 8 characters long" });
  }

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      email: email,
      password: hashedPassword,
    });
    return res.status(200).json({ message: "User signed up successfully" });
  } catch (err) {
    console.error("Error creating user", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export const login = async (req: Request, res: Response): Promise<any> => {
  console.log(req.body)
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Email and password are required" });
  }

  try {
    const user: UserType | null = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    const token = await generateToken({ userId: user?._id, email: user?.email })
    return res.status(200).json({
      message: 'Successfully Logge in',
      token: token
    })
  } catch (error) {
    console.error("Error logging in", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

