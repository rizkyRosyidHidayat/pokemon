export function catchingPokemon(): boolean {
  let res = false;
  const opportunity = Math.round(Math.random() * 1);

  if (opportunity === 1) {
    res = true;
  }

  return res;
}

type PokemonProps = {
  nickname: string;
  name: string;
  type: Array<{
    name: string;
    url: string;
  }>;
  sprite: string;
  moves: Array<string>;
  color: string;
};

export function savePokemon(pokemon: PokemonProps): boolean {
  let res = false;
  const list_pocket = localStorage.getItem("list_pocket");

  if (list_pocket === null) {
    localStorage.setItem("list_pocket", JSON.stringify([pokemon]));
    res = true;
  } else {
    const list_pokemon: Array<PokemonProps> = JSON.parse(list_pocket);
    const checkPokemonAndNickname: number = list_pokemon.findIndex(
      (list) => list.name !== pokemon.name && list.nickname !== pokemon.nickname
    );

    if (checkPokemonAndNickname === -1) {
      list_pokemon.push(pokemon)
      localStorage.setItem("list_pocket", JSON.stringify(list_pokemon));
      res = true
    }
  }

  return res;
}
