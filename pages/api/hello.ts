<<<<<<< HEAD
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
=======
>>>>>>> f70cd64 (feat: added husky and commitlint)
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

<<<<<<< HEAD
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
=======
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
>>>>>>> f70cd64 (feat: added husky and commitlint)
  res.status(200).json({ name: 'John Doe' })
}
