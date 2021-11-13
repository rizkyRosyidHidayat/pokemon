import Modal from "component/Modal";
import * as React from "react";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { releasePokemon } from "function/pokemon";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { pokemonSelector, setModalReleasePokemon } from "store/pokemon";
import { relesePokemon } from "component/styles/my_pokemon_list/ModalReleasePokemon";
import { MyPokemonProps } from "type/pokemon";
import Button from "component/Button";

interface IModalReleasePokemonProps {
  pokemon: MyPokemonProps;
}

const ModalReleasePokemon: React.FunctionComponent<IModalReleasePokemonProps> =
  (props) => {
    const dispatch = useAppDispatch();
    const selector = useAppSelector(pokemonSelector);
    const modal = selector.modal_release_pokemon;

    return (
      <Modal modal={modal}>
        <div
          css={css`
            ${relesePokemon}
          `}
        >
          <div
            css={css`
              text-align: right;
              margin-bottom: 0.5rem;
            `}
          >
            <span onClick={() => dispatch(setModalReleasePokemon(false))}>
              <Image
                src={"/icons/close.svg"}
                alt=""
                width={40}
                height={40}
              ></Image>
            </span>
          </div>
          {/* pokemon */}
          <div className="wrapper-img">
            <Image
              src={props.pokemon.sprite}
              alt=""
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
          {/* card */}
          <div className="card-modal">
            <h1>Are sure want to RELEASE {props.pokemon.nickname} ?</h1>
            <div
              css={css`
                margin-top: 1.5rem;
                margin-bottom: -3rem;
              `}
            >
              <Button
                text="RELEASE"
                onClick={() => {
                  releasePokemon(props.pokemon)
                  dispatch(setModalReleasePokemon(false))
                }}
              ></Button>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

export default ModalReleasePokemon;
