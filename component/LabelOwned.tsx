import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MyPokemonProps } from 'type/pokemon';

interface ILabelOwnedProps {
  name: string
}

const LabelOwned: React.FunctionComponent<ILabelOwnedProps> = (props) => {
  const [count, setCount] = React.useState(0)

  const data_local = localStorage.getItem("list_pocket")
  let list_pocket: Array<MyPokemonProps> = []
  if (typeof window !== "undefined") {
    if (data_local !== null) {
      list_pocket = JSON.parse(data_local);
    }
  }

  React.useEffect(() => {
    setCount(
      list_pocket
        .filter(pokemon => pokemon.name === props.name)
        .length
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.name])

  return (
    <div css={css`
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      background-color: #dedede;
      display: inline-block;
      font-weight: 700;
      font-size: 0.75rem;
      max-width: max-content;
      margin-bottom: .5rem;
    `}>Owned: {count}</div>
  );
};

export default LabelOwned;
