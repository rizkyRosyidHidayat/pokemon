import * as React from "react";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Loader from "./Loader";
import Header from "./Header";
import { MyPokemonProps } from "type/pokemon";
import Button from "./Button";
import { pokemonList } from "./styles/MyPokemonList";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { pokemonSelector, setModalReleasePokemon } from "store/pokemon";
import ModalReleasePokemon from "./my_pokemon_list/ModalReleasePokemon";

interface IMyPokemonListProps { }

const MyPokemonList: React.FunctionComponent<IMyPokemonListProps> = (props) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(pokemonSelector);
  const [my_list, setMyList] = React.useState<Array<MyPokemonProps>>([]);
  const [slected_pokemon, setSelectedPokemon] = React.useState<MyPokemonProps>({
    name: "",
    type: [
      {
        name: "",
        url: "",
      },
    ],
    sprite: "",
    moves: [""],
    color: "",
    nickname: "",
  });

  React.useEffect(() => {
    const data_local = localStorage.getItem("list_pocket");
    let list_pocket: Array<MyPokemonProps> = [];
    if (typeof window !== "undefined") {
      if (data_local !== null) {
        list_pocket = JSON.parse(data_local);
      }
    }
    setMyList(list_pocket);
  }, [selector.modal_release_pokemon]);

  return (
    <Loader pending={false}>
      <section
        css={css`
          ${pokemonList}
        `}
      >
        <Header fixed back color="#fff"></Header>

        <main>
          <div className="container">
            {my_list.length === 0 ? (
              <div>
                <p className="message-empty">My Pokemon List is Empty</p>
                <div
                  css={css`
                    margin-top: 3rem;
                  `}
                >
                  <Button text="SEARCH POKEMON"></Button>
                </div>
              </div>
            ) : (
              <ul>
                <li>
                  <p className="title">My Pokemon List</p>
                </li>
                {my_list.map((pokemon, index) => (
                  <li key={index.toString()}>
                    <div className="card">
                      <div
                        css={css`
                          margin-top: 1rem;
                        `}
                      >
                        <p>{pokemon.nickname}</p>
                        <h2 className="name-pokemon">{pokemon.name}</h2>
                        <div className="wrapper-btn">
                          <Button
                            text="RELEASE"
                            small
                            onClick={() => {
                              setSelectedPokemon(pokemon);
                              dispatch(setModalReleasePokemon(true));
                            }}
                          ></Button>
                        </div>
                      </div>
                      <div className="wrapper-img">
                        <Image
                          src={pokemon.sprite}
                          alt=""
                          width={100}
                          height={100}
                        ></Image>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>

        {selector.modal_release_pokemon ? (
          <ModalReleasePokemon pokemon={slected_pokemon}></ModalReleasePokemon>
        ) : null}
      </section>
    </Loader>
  );
};

export default MyPokemonList;
