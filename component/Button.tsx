import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  submit?: true;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <button 
      onClick={props.onClick}
      css={css`
        border: 0;
        outline: none;
        background-color: #b50c0c;
        color: white;
        font-weight: bold;
        border-radius: 10rem;
        padding: 1rem 2rem;
        text-align: center;
        font-size: 1.25rem;
        letter-spacing: 1px;
        width: 100%;
      `}
      type={props.submit ? 'submit' : 'button'}
    >
      {props.text}
    </button>
  );
};

export default Button;
