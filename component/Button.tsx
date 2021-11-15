import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  submit?: true;
  small?: true;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const default_size = `
    padding: 1rem 2rem;
    font-size: 1.25rem;
    width: 100%;
  `
  const small_size = `
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  `
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
        text-align: center;
        letter-spacing: 1px;
        ${props.small ? small_size : default_size}
      `}
      type={props.submit ? 'submit' : 'button'}
    >
      {props.text}
    </button>
  );
};

export default Button;
