import * as React from "react";
import Image from "next/image";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import { fixed, header } from "./styles/Header";

interface IHeaderProps {
  fixed?: true;
  color?: string;
  dark?: true;
  back?: true
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const navigate = useNavigate()

  return (
    <header css={css`
      background-color: ${props.color === undefined ? 'transparent' : props.color};
      ${header}
      ${props.fixed ? fixed : ''}
    `}>
      <div className="container">
        <div className="wrapper-header">
          {
            props.back
              ? <div css={css`margin-right: 1rem;margin-left: -1rem;`}>
                <Image
                  src={`/icons/${props.dark ? 'arrow-left-white.svg' : 'arrow-left.svg'}`}
                  alt="logo"
                  width={24}
                  height={24}
                  onClick={() => navigate(-1)}
                ></Image>
              </div>
              : null
          }
          <figure>
            <Link to={'/'}>
              <Image
                src={props.dark ? '/logo-white.svg' : '/logo.svg'}
                alt="logo"
                width={98}
                height={30}
              ></Image>
            </Link>
          </figure>
          <div css={css`margin-right: 1rem;margin-left: auto;`}>
            <Image
              src={`/icons/${props.dark ? 'wallet-white.svg' : 'wallet.svg'}`}
              alt="logo"
              width={32}
              height={32}
            ></Image>
          </div>
          <button className={`button-search ${props.dark ? '':'active'}`}>
            <Image
              src={`/icons/magnify.svg`}
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
