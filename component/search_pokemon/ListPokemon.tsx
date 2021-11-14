import * as React from 'react';
import Image from "next/image"
import Button from 'component/Button';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios"
import http from 'config/config';
import { card } from 'component/styles/search_pokemon/ListPokemon';
import LabelOwned from 'component/LabelOwned';
import { useNavigate } from 'react-router-dom';

interface IListPokemonProps {
  name: string;
  url: string;
}

const ListPokemon: React.FunctionComponent<IListPokemonProps> = (props) => {
  const [selected_pokemon, setSelectedPokemon] = React.useState<{
    name: string,
    sprite: string,
    types: string[]
  }>({
    name: "",
    sprite: "",
    types: ['']
  });
  const [color, setColor] = React.useState("")
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    axios.all([
      axios.get(props.url),
      http.get('pokemon-species/' + props.name)
    ]).then(axios.spread((...res) => {
      const status = res.findIndex(data => data.status !== 200)
      const pokemon = res[0].data
      const color = res[1].data.color.name

      if (status === -1) {
        setSelectedPokemon({
          name: pokemon.name,
          sprite: pokemon.sprites.other.dream_world.front_default,
          types: pokemon.types.map((data: {
            type: { name: string }
          }) => data.type.name)
        })
        setColor(color === 'white' ? '#b5b5b5' : color)

        setLoading(false)
      } else {
        setLoading(false)
      }
    }))
      .catch(error => console.error(error))
  }, [props.name, props.url])

  const navigate = useNavigate()

  return (
    <>
      {
        loading && color === ''
          ? null
          : !loading && (color === '' || selected_pokemon.name === '')
            ? 'Something went wrong'
            : <div css={css`
                background-color: ${color};
                ${card}
              `}>
              <div
                css={css`
                  margin-top: 1rem;
                `}
              >
                <LabelOwned name={selected_pokemon.name} text></LabelOwned>
                <h2 className="name-pokemon">{selected_pokemon.name}</h2>
                <ul className='list-types'>
                  {
                    selected_pokemon.types.map(type => (
                      <li key={type}>{type}</li>
                    ))
                  }
                </ul>
                <div className="wrapper-btn">
                  <Button
                    text="DETAILS"
                    small
                    onClick={() => navigate('/detail/'+selected_pokemon.name)}
                  ></Button>
                </div>
              </div>
              <div className="wrapper-img">
                <Image
                  src={selected_pokemon.sprite}
                  alt=""
                  width={100}
                  height={100}
                ></Image>
              </div>
            </div>
      }
    </>
  );
};

export default ListPokemon;
