import { createReducer } from "@reduxjs/toolkit";
import { ListPokemonProps } from "type/pokemon";
import { getListPokemon, getPokemonColor, getPokemonDetail, setModalCatchPokemon, setModalReleasePokemon } from ".";
import { getPokemonStarter } from "./actions";
import { DetailPokemon, DetailPokemonProps, DetailPokemonStarter, DetailPokemonStarterProps } from "./initial-value";

type PokemonProps = {
  starter: {
    data: Array<DetailPokemonStarterProps>,
    pending: boolean,
    error: boolean
  },
  detail: {
    data: DetailPokemonProps,
    pending: boolean,
    error: boolean
  },
  list: {
    data: Array<ListPokemonProps>,
    pending: boolean,
    error: boolean
  },
  color: string;
  modal_catch_pokemon: boolean,
  modal_release_pokemon: boolean,
}

const initialState: PokemonProps = {
  starter: {
    data: [DetailPokemonStarter],
    pending: true,
    error: false
  },
  detail: {
    data: DetailPokemon,
    pending: true,
    error: false
  },
  list: {
    data: [{url: '', name: ''}],
    pending: true,
    error: false
  },
  color: 'white',
  modal_catch_pokemon: false,
  modal_release_pokemon: false
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
    /**
     * set modal catch pokemon
     */
    .addCase(setModalCatchPokemon, (state, { payload }) => {
      state.modal_catch_pokemon = payload
    })
    /**
     * set modal release pokemon
     */
    .addCase(setModalReleasePokemon, (state, { payload }) => {
      state.modal_release_pokemon = payload
    })
    /**
     * get list pokemon
     */
    .addCase(getListPokemon.pending, state => {
      state.list.pending = true
    })
    .addCase(getListPokemon.fulfilled, (state, { payload }) => {
      state.list.pending = false
      if (payload !== undefined) {
        state.list.data = payload
      }
    })
    .addCase(getListPokemon.rejected, state => {
      state.list.pending = false
      state.list.error = true
    })
})