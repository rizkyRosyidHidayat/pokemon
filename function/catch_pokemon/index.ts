import { MyPokemonProps } from "type/pokemon";

export function catchingPokemon(): boolean {
  let res = false;
  const opportunity = Math.round(Math.random() * 1);

  if (opportunity === 1) {
    res = true;
  }

  return res;
}

export function savePokemon(pokemon: MyPokemonProps): boolean {
  let res = false;
  const list_pocket = localStorage.getItem("list_pocket");

  if (list_pocket === null) {
    localStorage.setItem("list_pocket", JSON.stringify([pokemon]));
    res = true;
  } else {
    const list_pokemon: Array<MyPokemonProps> = JSON.parse(list_pocket);
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
