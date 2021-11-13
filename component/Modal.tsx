/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import { screen } from './styles/Modal';

interface IModalProps {
  modal: boolean;
  children: React.ReactElement
}

const Modal: React.FunctionComponent<IModalProps> = (props) => {
  return (
    <div css={css`
      display: ${props.modal ? 'flex' : 'hidden'};
      ${screen}
    `}>
      {props.children}
    </div>
  );
};

export default Modal;
