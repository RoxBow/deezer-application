import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { EXTERNAL_API_URL } from '@constants';

type QueryParameters = {
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query as QueryParameters;

  const data = await axios
    .get(`${EXTERNAL_API_URL}/artist/${id}/albums`)
    .then((res) => res.data);

  res.status(200).json({ albums: data?.data || [] });
}
