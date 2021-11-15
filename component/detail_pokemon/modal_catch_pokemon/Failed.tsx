import * as React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { pokemonSelector, setModalCatchPokemon } from "store/pokemon";
import Button from "component/Button";
import { succes } from "component/styles/detail_pokemon/modal_catch_pokemon/Success";

interface IFailedProps { }

const Failed: React.FunctionComponent<IFailedProps> = (props) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(pokemonSelector);
  const pokemon = selector.detail.data;

  return (
    <div
      css={css`
        ${succes}
      `}
    >
      <div
        css={css`
          text-align: right;
          margin-bottom: 0.5rem;
        `}
      >
        <span onClick={() => dispatch(setModalCatchPokemon(false))}>
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
        <Image src={'/icons/warning.svg'} alt="" layout="fill" objectFit="contain"></Image>
      </div>
      <div className="card">
        <h1>
          Ouch, Pokemon Run Away !
        </h1>
        {/* card */}
        <div
          css={css`
            margin-top: 1.5rem;
            margin-bottom: -3rem;
          `}
        >
          <Button text="TRY AGAIN" onClick={() => dispatch(setModalCatchPokemon(false))}></Button>
        </div>
      </div>
    </div>
  );
};

export default Failed;
