import * as React from "react";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Loader from "./Loader";
import Header from "./Header";
import { MyPokemonProps } from "type/pokemon";
import Button from "./Button";
import { pokemonList } from "./styles/SearchPokemon";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getListPokemon, pokemonSelector, setModalReleasePokemon } from "store/pokemon";
import ListPokemon from "./search_pokemon/ListPokemon";

interface ISearchPokemonProps { }

const SearchPokemon: React.FunctionComponent<ISearchPokemonProps> = (props) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(pokemonSelector);
  const list_pokemon = selector.list

  React.useEffect(() => {
    dispatch(getListPokemon())
  }, [dispatch]);

  return (
    <Loader pending={list_pokemon.pending}>
      <section
        css={css`
          ${pokemonList}
        `}
      >
        <Header fixed back color="#fff"></Header>

        <main>
          <div className="container">
            {list_pokemon.data.length === 0 ? (
              <div>
                <p className="message-empty">Something Went Wrong :(</p>
                <div
                  css={css`
                    margin-top: 3rem;
                  `}
                >
                  <Button text="TRY AGAIN"></Button>
                </div>
              </div>
            ) : (
              <ul className="list-pokemon">
                <li className="list">
                  <p className="title">Search Pokemon</p>
                </li>
                {list_pokemon.data.map((pokemon) => (
                  <li className="list" key={pokemon.name}>
                    <ListPokemon name={pokemon.name} url={pokemon.url}></ListPokemon>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </section>
    </Loader>
  );
};

export default SearchPokemon;
