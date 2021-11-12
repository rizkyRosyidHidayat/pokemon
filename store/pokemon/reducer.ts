import { createReducer } from "@reduxjs/toolkit";
import { getPokemonStarter } from "./actions";
import { DetailPokemonStarter, DetailPokemonStarterProps } from "./initial-value";

type PokemonProps = {
  data: {
    starter: DetailPokemonStarterProps
  },
  pending: boolean,
  error: boolean
}

const initialState: PokemonProps = {
  data: {
    starter: DetailPokemonStarter
  },
  pending: true,
  error: false
}

export const pokemonReducer = createReducer(initialState, builder => {
  builder
    .addCase(getPokemonStarter.pending, state => {
      state.pending = true
    })
    .addCase(getPokemonStarter.fulfilled, (state, { payload }) => {
      state.pending = false
      if (payload !== undefined) {
        state.data.starter = payload
      }
    })
    .addCase(getPokemonStarter.rejected, state => {
      state.pending = false
      state.error = true
    })
})