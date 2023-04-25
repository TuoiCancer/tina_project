import { Person, ResponseError } from '@/interface';
import { NextApiRequest, NextApiResponse } from 'next';
import { userData } from '../../../constants/index';

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Person | ResponseError>
) {
  const { query, body } = req;
  const { username, password } = body;
  const person = userData.find((p) => {
    return p.username === username && p.password === password;
  });

  // User with id exists
  return person
    ? res.status(200).json(person)
    : res.status(404).json({ message: `User is not found.` });
}
