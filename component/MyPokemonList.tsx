import * as React from 'react';
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Loader from './Loader';
import Header from './Header';
import { MyPokemonProps } from 'type/pokemon';
import Button from './Button';
import { pokemonList } from './styles/MyPokemonList';

interface IMyPokemonListProps {
}

const MyPokemonList: React.FunctionComponent<IMyPokemonListProps> = (props) => {
  const [my_list, setMyList] = React.useState<Array<MyPokemonProps>>([])

  const data_local = localStorage.getItem("list_pocket")
  let list_pocket: Array<MyPokemonProps> = []
  if (typeof window !== "undefined") {
    if (data_local !== null) {
      list_pocket = JSON.parse(data_local);
    }
  }

  React.useEffect(() => {
    setMyList(list_pocket);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Loader pending={false}>
      <section css={css`
        ${pokemonList}
      `}>
        <Header fixed back color='#fff'></Header>

        <main>
          <div className="container">
            {
              my_list.length === 0
                ? <div>
                  <p className='message-empty'>
                    My Pokemon List is Empty
                  </p>
                  <div css={css`margin-top: 3rem;`}>
                    <Button text='SEARCH POKEMON'></Button>
                  </div>
                </div>
                : <ul>
                  {
                    my_list.map((pokemon, index) => (
                      <li key={index.toString()}>
                        <div className="card">
                          <div css={css`margin-top: 1rem;`}>
                            <p>{pokemon.nickname}</p>
                            <h2 className='name-pokemon'>{pokemon.name}</h2>
                            <div className="wrapper-btn">
                              <Button text='RELEASE' small></Button>
                            </div>
                          </div>
                          <div className='wrapper-img'>
                            <Image
                              src={pokemon.sprite}
                              alt=""
                              width={100}
                              height={100}
                            ></Image>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
            }
          </div>
        </main>
      </section>
    </Loader>
  );
};

export default MyPokemonList;
