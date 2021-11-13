import * as React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { pokemonSelector, setModalCatchPokemon } from "store/pokemon";
import Button from "component/Button";
import { succes } from "component/styles/detail_pokemon/modal_catch_pokemon/Success";
import { savePokemon } from "function/catch_pokemon";
import { useNavigate } from "react-router-dom";

interface ISuccessProps { }

const Success: React.FunctionComponent<ISuccessProps> = (props) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(pokemonSelector);
  const pokemon = selector.detail.data;

  const [nickname, setNickname] = React.useState("");
  const [result, setResult] = React.useState<null | boolean>(null)
  const navigate = useNavigate()

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
        <Image src={pokemon.sprite} alt="" layout="fill" objectFit="contain"></Image>
      </div>
      {/* card */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (nickname !== "") {
            if (
              savePokemon({
                ...pokemon,
                color: selector.color,
                nickname: nickname
              })
            ) {
              setResult(true)
              navigate('/pocket')
            } else {
              setResult(false)
            }
          }
        }}
        className="card"
      >
        <input
          type="text"
          name="nickname"
          id="nickname"
          placeholder="Give your pokemon nickname"
          autoComplete="off"
          className="input-nickname"
          onChange={(e) => setNickname(e.target.value)}
        />
        {/* message */}
        {
          result === false
            ? <p css={css`color: red;margin-top: 0.25rem;`}>
              Save failed, try a different name
            </p>
            : null
        }
        <div
          css={css`
            margin-top: 1.5rem;
            margin-bottom: -3rem;
          `}
        >
          <Button text="SAVE POKEMON" submit></Button>
        </div>
      </form>
    </div>
  );
};

export default Success;
