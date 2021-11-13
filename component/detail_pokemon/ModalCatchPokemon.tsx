import Modal from 'component/Modal';
import * as React from 'react';
import Image from "next/image"
import { bounce } from 'component/styles/detail_pokemon/ModalCatchPokemon';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { catchingPokemon } from 'function/catch_pokemon';
import Success from './modal_catch_pokemon/Success';
import { useAppSelector } from 'store/hooks';
import { pokemonSelector } from 'store/pokemon';
import Failed from './modal_catch_pokemon/Failed';

interface IModalCatchPokemonProps {}

const ModalCatchPokemon: React.FunctionComponent<IModalCatchPokemonProps> = (props) => {
  const selector = useAppSelector(pokemonSelector)
  const modal = selector.modal_catch_pokemon
  const [result, setResult] = React.useState<null | boolean>(null)
  React.useEffect(() => {
    setTimeout(() => {
      setResult(catchingPokemon())
    }, 3000);
  }, [])

  return (
    <Modal modal={modal}>
      <>
        {
          result === null
            ? <div css={css`
                ${bounce}
              `}>
              <Image
                src={'/pokeball.png'}
                alt='pokeball'
                width={100}
                height={100}
              ></Image>
            </div>
            : result === true
              ? <Success></Success>
              : result === false
                ? <Failed></Failed>
                : null
        }
      </>
    </Modal>
  );
};

export default ModalCatchPokemon;
