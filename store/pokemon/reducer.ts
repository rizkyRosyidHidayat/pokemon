import { createReducer } from "@reduxjs/toolkit";
import { getPokemonColor, getPokemonDetail } from ".";
import { getPokemonStarter } from "./actions";
import { DetailPokemon, DetailPokemonProps, DetailPokemonStarter, DetailPokemonStarterProps } from "./initial-value";

type PokemonProps = {
  starter: {
    data: DetailPokemonStarterProps,
    pending: boolean,
    error: boolean
  },
  detail: {
    data: DetailPokemonProps,
    pending: boolean,
    error: boolean
  },
  color: string;
}

const initialState: PokemonProps = {
  starter: {
    data: DetailPokemonStarter,
    pending: true,
    error: false
  },
  detail: {
    data: DetailPokemon,
    pending: true,
    error: false
  },
  color: 'white'
}

export const pokemonReducer = createReducer(initialState, builder => {
  builder
  /**
   * get detail pokemon starter
   */
    .addCase(getPokemonStarter.pending, state => {
      state.starter.pending = true
    })
    .addCase(getPokemonStarter.fulfilled, (state, { payload }) => {
      state.starter.pending = false
      if (payload !== undefined) {
        state.starter.data = payload
      }
    })
    .addCase(getPokemonStarter.rejected, state => {
      state.starter.pending = false
      state.starter.error = true
    })
    /**
     * get detail pokemon
     */
    .addCase(getPokemonDetail.pending, state => {
      state.detail.pending = true
    })
    .addCase(getPokemonDetail.fulfilled, (state, { payload }) => {
      state.detail.pending = false
      if (payload !== undefined) {
        state.detail.data = payload
      }
    })
    .addCase(getPokemonDetail.rejected, state => {
      state.detail.pending = false
      state.detail.error = true
    })
    /**
     * get color pokemon
     */
     .addCase(getPokemonColor.fulfilled, (state, { payload }) => {
      if (payload !== undefined) {
        state.color = payload
      } else {
        state.color = 'white'
      }
    })
})