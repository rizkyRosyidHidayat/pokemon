import * as React from "react";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { navigation } from "component/styles/pokemon_starter/Navigation";
import { ListPokemonStarterData } from "store/pokemon/initial-value";

interface INavigationProps {
  page: number;
  setPage: (val: number) => void;
}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  return (
    <nav
      css={css`
        ${navigation}
      `}
    >
      <div className="container">
        <div className="wrapper-nav">
          <ul className="list-indicator">
            {ListPokemonStarterData.map((pokemon, index) => (
              <li key={pokemon.name}>
                <span className={props.page === index ? 'active' : ''}></span>
              </li>
            ))}
          </ul>
          <Image
            src={"/icons/button-nav-left.svg"}
            alt="nav left"
            width={44}
            height={44}
            onClick={() => {
              if (props.page > 0) {
                props.setPage(props.page-1)
              }
            }}
          ></Image>
          <Image
            src={"/icons/button-nav-right.svg"}
            alt="nav right"
            width={44}
            height={44}
            onClick={() => {
              if (props.page >= 0 || props.page < ListPokemonStarterData.length-1) {
                props.setPage(props.page+1)
              }
            }}
          ></Image>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
