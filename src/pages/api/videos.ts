import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Hier komt later de echte API logica
    res.status(200).json({ videos: [] })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
} 