import styled from "@emotion/styled";
import * as React from "react";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IHeaderProps {
  className?: string;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className={props.className}>
      <div className="container">
        <div className="wrapper-header">
          <figure>
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={139}
              height={68}
            ></Image>
          </figure>
          <button className="button-search">
            <Image
              src={"/icons/magnify.svg"}
              alt=""
              width={24}
              height={24}
            ></Image>
          </button>
        </div>
      </div>
    </header>
  );
};

const StyleHeader = styled(Header)`
  padding: 0.5rem 0;
  width: 100%;
  & div.wrapper-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & button.button-search{
    border: 0;
    outline: none;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
  }
`

export default StyleHeader;
