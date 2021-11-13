import styled from "@emotion/styled";
import * as React from "react";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  cardPokemon,
  labelOwned,
  namePokemon,
  pokemonStarter,
  typePokemon,
  wrapperImage,
} from "./styles/PokemonStarter";
import Header from "./Header"
import Navigation from "./pokemon_starter/Navigation"
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getPokemonColor, getPokemonStarter, pokemonSelector } from "store/pokemon";
import { ListPokemonStarterData } from "store/pokemon/initial-value";
import { Link } from "react-router-dom";
import Loader from "./Loader"
import Button from "./Button";

interface IPokemonStarterProps {
  className?: string;
}

const PokemonStarter: React.FunctionComponent<IPokemonStarterProps> = (
  props
) => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(pokemonSelector)
  const detail_pokemon = selector.starter.data
  const color = selector.color
  const pokemon = ListPokemonStarterData[2].name

  React.useEffect(() => {
    dispatch(getPokemonStarter(pokemon))
    dispatch(getPokemonColor(pokemon))
  }, [dispatch, pokemon])

  return (
    <Loader pending={selector.starter.pending}>
      <section css={css`
        background-color: ${color};
        ${pokemonStarter}
      `}>
        <Header dark></Header>
        <main
          css={css`
          width: 100%;
        `}
        >
          <div className="container">
            {/* image */}
            <div css={css`${wrapperImage}`}>
              <Image
                src={detail_pokemon.sprite}
                alt={`pokemon ${detail_pokemon.name}`}
                layout="fill"
                objectFit="contain"
                priority
              ></Image>
            </div>
            {/* detail */}
            <div css={css`${cardPokemon}`}>
              {/* owned */}
              <div css={css`${labelOwned}`}>Owned: 0</div>
              {/* name */}
              <h1 css={css`${namePokemon}`}>
                {detail_pokemon.name}
              </h1>
              {/* type */}
              <ul css={css`display: flex;gap: 1rem;flex-wrap: wrap;`}>
                {
                  detail_pokemon.type.map(type => (
                    <li key={type.name} css={css`${typePokemon}`}>
                      {type.name}
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* button next */}
            <div css={css`padding: 0 1.5rem;margin-top: -2rem;`}>
              <Link to={`/detail/${detail_pokemon.name}`}>
                <Button text="MORE DETAIL"></Button>
              </Link>
            </div>
          </div>
        </main>
        <Navigation></Navigation>
      </section>
    </Loader>
  );
};

export default PokemonStarter;
