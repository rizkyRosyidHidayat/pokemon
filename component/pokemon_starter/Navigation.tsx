import styled from "@emotion/styled";
import * as React from "react";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface INavigationProps {
  className?: string;
}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  return (
    <nav className={props.className}>
      <div className="container">
        <div className="wrapper-nav">
          <ul className="list-indicator">
            <li><span className="active"></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
          </ul>
          <Image
            src={"/icons/button-nav-left.svg"}
            alt="nav left"
            width={44}
            height={44}
          ></Image>
          <Image
            src={"/icons/button-nav-right.svg"}
            alt="nav right"
            width={44}
            height={44}
          ></Image>
        </div>
      </div>
    </nav>
  );
};

const StyleNavigation = styled(Navigation)`
  padding: 1rem 0;
  width: 100%;

  & div.wrapper-nav{
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  & ul.list-indicator{
    margin-right: auto;
    display: flex;
    gap: 0.5rem;
    span {
      width: 0.5rem;
      height: 0.5rem;
      display: inline-block;
      border-radius: 10rem;
      background-color: #0e0e0e;
    }
    & span.active {
      width: 2rem;
    }
  }
`

export default StyleNavigation;
