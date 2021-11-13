import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import http from "config/config";
import { PokemonClient } from "pokenode-ts";
import {
  DetailPokemonProps,
  DetailPokemonStarterProps,
  ListPokemonStarterData,
} from "./initial-value";
import axios from "axios";

export const getPokemonStarter = createAsyncThunk(
  "getPokemonStarter",
  async () => {
    const api = new PokemonClient();

    const list_pokemon_starter = ListPokemonStarterData.map((pokemon) =>
      api.getPokemonByName(pokemon.name)
    );

    return  await axios.all(list_pokemon_starter).then(
      axios.spread((...res): Array<DetailPokemonStarterProps> => {
        return ListPokemonStarterData.map((list, index) => ({
          name: res[index].name,
          type: res[index].types.map((type) => type.type).map((type) => type),
          sprite: res[index].sprites.other.dream_world.front_default,
        }))
      })
    )
    .catch((error) => console.error(error));
  }
);

export const getPokemonDetail = createAsyncThunk(
  "getPokemonDetail",
  async (name: string) => {
    const api = new PokemonClient();

    return await api
      .getPokemonByName(name)
      .then(
        (res): DetailPokemonProps => ({
          name: res.name,
          type: res.types.map((type) => type.type).map((type) => type),
          sprite: res.sprites.other.dream_world.front_default,
          moves: res.moves.map((move) => move.move.name),
        })
      )
      .catch((error) => console.error(error));
  }
);

export const getPokemonColor = createAsyncThunk(
  "getPokemonColor",
  async (name: string) => {
    return await http
      .get("pokemon-species/" + name)
      .then((res): string | undefined => {
        if (res.status === 200) {
          return res.data.color.name;
        }
      })
      .catch((error) => console.error(error));
  }
);

export const setModalCatchPokemon = createAction<boolean>(
  "setModalCatchPokemon"
);
export const setModalReleasePokemon = createAction<boolean>(
  "setModalReleasePokemon"
);
