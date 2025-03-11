import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

interface AuthRequest extends Request {
  userId?: string
}

export const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '')

    if (!token) {
      throw new Error()
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'jouw-geheime-key')
    req.userId = (decoded as any).userId

    next()
  } catch (error) {
    res.status(401).json({ error: 'Authenticatie vereist' })
  }
} 