import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { EXTERNAL_API_URL } from '@constants';

type QueryParameters = {
  term: string;
  index: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { term, index } = req.query as QueryParameters;

  const data = await axios
    .get(`${EXTERNAL_API_URL}/search?q=track:"${term}"&index="${index}"`)
    .then((res) => res.data);

  res.status(200).json({ data });
}
