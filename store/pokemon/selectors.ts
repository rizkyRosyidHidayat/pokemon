import { RootState } from "..";
import { createSelector } from '@reduxjs/toolkit';

export const selectPokemon = (state: RootState) => state.pokemon

export const pokemonSelector = createSelector(
  selectPokemon,
  state => state
)