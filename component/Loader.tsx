import styled from '@emotion/styled';
import * as React from 'react';

interface ILoaderProps {
  className?: string;
  children: React.ReactElement;
  pending: boolean;
}

const Loader: React.FunctionComponent<ILoaderProps> = (props) => {
  return (
    <div className={props.className}>
      {
        props.pending
          ? 'Loading'
          : props.children
      }
    </div>
  );
};

const StyleLoader = styled(Loader)`
  display: flex;
  align-items: center;
  justify-content: center;
  widht: 100%;
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1000;
`

export default StyleLoader;
