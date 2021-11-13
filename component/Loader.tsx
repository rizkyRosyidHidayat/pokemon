/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import { loader } from './styles/Loader';

interface ILoaderProps {
  className?: string;
  children: React.ReactElement;
  pending: boolean;
}

const Loader: React.FunctionComponent<ILoaderProps> = (props) => {
  return (
    <div>
      {
        props.pending
          ? <div css={css`${loader}`}>
            Loading
          </div>
          : props.children
      }
    </div>
  );
};

export default Loader;
