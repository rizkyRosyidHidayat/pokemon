import styled from "@emotion/styled";
import * as React from "react";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  buttonsearch,
  cardPokemon,
  labelOwned,
  namePokemon,
  typePokemon,
  wrapperFooter,
  wrapperHeader,
  wrapperImage,
} from "./styles/ListPokemonByType";

interface IListPokemonByTypeProps {
  className?: string;
}

const ListPokemonByType: React.FunctionComponent<IListPokemonByTypeProps> = (
  props
) => {
  return (
    <section className={props.className}>
      <header
        css={css`
          padding: 0.5rem 0;
          width: 100%;
        `}
      >
        <div className="container">
          <div css={wrapperHeader}>
            <figure>
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={139}
                height={68}
              ></Image>
            </figure>
            <button css={buttonsearch}>
              <Image
                src={"/icons/magnify.svg"}
                alt=""
                width={24}
                height={24}
              ></Image>
            </button>
          </div>
        </div>
      </header>
      <main
        css={css`
          width: 100%;
        `}
      >
        <div className="container">
          {/* image */}
          <div css={wrapperImage}>
            <Image
              src={"/charizad.svg"}
              alt="pokemon image"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
          {/* detail */}
          <div css={cardPokemon}>
            {/* type */}
            <h2 css={typePokemon}>Fire</h2>
            {/* name */}
            <h1 css={namePokemon}>Charizad</h1>
            {/* owned */}
            <div css={css`display: flex;align-items: center;gap: 1rem;`}>
              <div css={labelOwned}>Owned: 0</div>
              <p css={css`cursor: pointer;`}>
                <u>More Pokemon</u>
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer
        css={css`
          padding: 1rem 0;
          width: 100%;
        `}
      >
        <div className="container">
          <div css={wrapperFooter}>
            <ul css={css`
              margin-right: auto;
              display: flex;
              gap: 0.5rem;
              span {
                width: 0.5rem;
                height: 0.5rem;
                display: inline-block;
                border-radius: 10rem;
                background-color: #0e0e0e;
              }
              & span.active {
                width: 2rem;
              }
            `}>
              <li><span className="active"></span></li>
              <li><span></span></li>
              <li><span></span></li>
              <li><span></span></li>
            </ul>
            <Image
              src={"/icons/button-nav-left.svg"}
              alt="nav left"
              width={44}
              height={44}
            ></Image>
            <Image
              src={"/icons/button-nav-right.svg"}
              alt="nav right"
              width={44}
              height={44}
            ></Image>
          </div>
        </div>
      </footer>
    </section>
  );
};

const StyleListPokemonByType = styled(ListPokemonByType)`
  background-color: #fefefe;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background: rgb(194,114,17);
  background: linear-gradient(180deg, rgba(194,114,17,1) 14%, rgba(223,169,48,1) 46%, rgba(250,212,129,1) 72%, rgba(255,246,182,1) 100%);
`;

export default StyleListPokemonByType;
