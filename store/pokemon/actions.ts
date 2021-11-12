import { createAsyncThunk } from "@reduxjs/toolkit";
import { PokemonClient } from 'pokenode-ts';
import { DetailPokemonStarterProps } from "./initial-value";

export const getPokemonStarter = createAsyncThunk('getPokemonStarter', async (name: string) => {
  const api = new PokemonClient();

  return await api
    .getPokemonByName(name)
    .then((res):DetailPokemonStarterProps => ({
      name: res.name,
      type: res.types
        .map(type => type.type)
        .map(type => type),
      sprite: res.sprites.other.dream_world.front_default
    }))
    .catch((error) => console.error(error));
})