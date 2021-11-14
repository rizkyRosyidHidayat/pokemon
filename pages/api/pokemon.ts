// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PokemonClient } from 'pokenode-ts';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

const api = new PokemonClient();

await api
  .listPokemons()
  .then((response) => res.status(200).json(response))
  .catch((error) => console.error(error));
}
