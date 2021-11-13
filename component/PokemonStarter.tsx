import styled from "@emotion/styled";
import * as React from "react";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  cardPokemon,
  labelOwned,
  namePokemon,
  typePokemon,
  wrapperImage,
} from "./styles/PokemonStarter";
import Header from "./Header"
import Navigation from "./pokemon_starter/Navigation"
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getPokemonStarter, pokemonSelector } from "store/pokemon";
import { ListPokemonStarterData } from "store/pokemon/initial-value";
import { Link } from "react-router-dom";
import Loader from "./Loader"

interface IListPokemonStarterProps {
  className?: string;
}

const ListPokemonStarter: React.FunctionComponent<IListPokemonStarterProps> = (
  props
) => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(pokemonSelector)
  const detail_pokemon = selector.starter.data
  const pokemon = ListPokemonStarterData[0].name

  React.useEffect(() => {
    dispatch(getPokemonStarter(pokemon))
  }, [dispatch, pokemon])

  return (
    <Loader pending={selector.starter.pending}>
      <section className={props.className}>
        <Header></Header>
        <main
          css={css`
          width: 100%;
        `}
        >
          <div className="container">
            {/* image */}
            <div css={wrapperImage}>
              <Image
                src={detail_pokemon.sprite}
                alt={`pokemon ${detail_pokemon.name}`}
                layout="fill"
                objectFit="contain"
                priority
              ></Image>
            </div>
            {/* detail */}
            <div className="wrapper-card">
              <div css={cardPokemon}>
                {/* owned */}
                <div css={labelOwned}>Owned: 0</div>
                {/* name */}
                <h1 css={namePokemon}>
                  {detail_pokemon.name}
                </h1>
                {/* type */}
                <ul css={css`display: flex;gap: 1rem;flex-wrap: wrap;`}>
                  {
                    detail_pokemon.type.map(type => (
                      <li key={type.name} css={typePokemon}>
                        {type.name}
                      </li>
                    ))
                  }
                </ul>
              </div>
              {/* button next */}
              <div css={css`margin-left: -26px;`}>
                <Link to={`/detail/${detail_pokemon.name}`}>
                  <Image
                    src={"/icons/button-next.svg"}
                    alt="pokemon image"
                    height={52}
                    width={52}
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Navigation></Navigation>
      </section>
    </Loader>
  );
};

const StyleListPokemonStarter = styled(ListPokemonStarter)`
  background-color: #fefefe;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background: rgb(194,114,17);
  background: linear-gradient(180deg, rgba(194,114,17,1) 14%, rgba(223,169,48,1) 46%, rgba(250,212,129,1) 72%, rgba(255,246,182,1) 100%);

  & div.wrapper-card{
    display: flex;
    align-items: center;
  }
`;

export default StyleListPokemonStarter;
