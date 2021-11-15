/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import Header from "./Header";
import {
  detailPokemon,
  namePokemon,
  typePokemon,
  wrapperImage,
} from "./styles/DetailPokemon";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  getPokemonColor,
  getPokemonDetail,
  pokemonSelector,
  setModalCatchPokemon,
} from "store/pokemon";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import ModalCatchPokemon from "./detail_pokemon/ModalCatchPokemon";
import Button from "./Button";
import LabelOwned from "./LabelOwned";

interface IDetailPokemonProps {
  className?: string;
}

const DetailPokemon: React.FunctionComponent<IDetailPokemonProps> = (props) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(pokemonSelector);
  const detail_pokemon = selector.detail.data;
  const color = selector.color;

  const params = useParams();

  React.useEffect(() => {
    if (params.name !== undefined) {
      dispatch(getPokemonDetail(params.name));
      dispatch(getPokemonColor(params.name));
    }
  }, [dispatch, params.name]);

  const [scroll, setScroll] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setScroll(window.screenY);
  };
  return (
    <>
      <Loader pending={selector.detail.pending}>
        <section
          css={css`
            background-color: ${color};
            ${detailPokemon}
          `}
        >
          <Header color={color} fixed dark back></Header>
          {/* image */}
          {/* image */}
          <div
            css={css`
              height: calc(20rem - ${scroll}px);
              ${wrapperImage}
            `}
          >
            <Image
              src={detail_pokemon.sprite}
              alt={`pokemon ${detail_pokemon.name}`}
              layout="fill"
              objectFit="contain"
              priority
            ></Image>
          </div>
          {/* detail */}
          <div className="card">
            <div className="wrapper-card">
              {/* owned */}
              <LabelOwned name={detail_pokemon.name}></LabelOwned>
              {/* name */}
              <h1
                css={css`
                  ${namePokemon}
                `}
              >
                {detail_pokemon.name}
              </h1>
              {/* type */}
              <ul className="list-type">
                {detail_pokemon.type.map((type) => (
                  <li
                    key={type.name}
                    css={css`
                      ${typePokemon}
                    `}
                  >
                    {type.name}
                  </li>
                ))}
              </ul>
              {/* move */}
              <h2
                css={css`
                  margin-top: 1.75rem;
                  margin-bottom: 1rem;
                `}
              >
                Moves
              </h2>
              <ul className="list-move">
                {detail_pokemon.moves.map((move) => (
                  <li key={move}>{move}</li>
                ))}
              </ul>
            </div>
            {/* catch pokemon */}
            <div
              css={css`
                margin-left: -1rem;
                margin-right: -1rem;
                margin-top: 2rem;
              `}
            >
              <Button
                onClick={() => dispatch(setModalCatchPokemon(true))}
                text="CATCH POKEMON"
              ></Button>
            </div>
          </div>
        </section>
      </Loader>

      {
        selector.modal_catch_pokemon
          ? <ModalCatchPokemon></ModalCatchPokemon>
          : null
      }
    </>
  );
};

export default DetailPokemon;
