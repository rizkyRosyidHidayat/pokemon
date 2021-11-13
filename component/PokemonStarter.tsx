import styled from "@emotion/styled";
import * as React from "react";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  cardPokemon,
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
import LabelOwned from "./LabelOwned";

interface IPokemonStarterProps {
  className?: string;
}

const PokemonStarter: React.FunctionComponent<IPokemonStarterProps> = (
  props
) => {
  const [page, setPage] = React.useState<number>(0)
  const dispatch = useAppDispatch()
  const selector = useAppSelector(pokemonSelector)
  const detail_pokemon = selector.starter.data[page]
  const color = selector.color
  const pokemon = ListPokemonStarterData[page].name

  React.useEffect(() => {
    if (detail_pokemon.name === '') {
      dispatch(getPokemonStarter())
    } else if (detail_pokemon.name !== '') {
      dispatch(getPokemonColor(pokemon))
    }
  }, [dispatch, pokemon, detail_pokemon.name])

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
              <LabelOwned name={detail_pokemon.name}></LabelOwned>
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
        <Navigation page={page} setPage={val => setPage(val)}></Navigation>
      </section>
    </Loader>
  );
};

export default PokemonStarter;
