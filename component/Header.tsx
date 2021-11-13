import * as React from "react";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { fixed, header } from "./styles/Header";

interface IHeaderProps {
  className?: string;
  fixed?: true;
  color?: string;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header css={css`
      background-color: ${props.color === undefined ? '#f2f2f2' : props.color};
      ${header}
      ${props.fixed ? fixed : ''}
    `}>
      <div className="container">
        <div className="wrapper-header">
          <figure>
            <Link to={'/'}>
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={119}
                height={48}
              ></Image>
            </Link>
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

export default Header;
