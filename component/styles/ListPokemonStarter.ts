/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const cardPokemon = css`
  background-color: #fefefe;
  padding: 1.5rem 2rem;
  border-radius: 1.5rem;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`
export const labelOwned = css`
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  background-color: #dedede;
  display: inline-block;
  font-weight: 700;
  font-size: 0.75rem;
  max-width: max-content;
  margin-bottom: .5rem;
`;
export const wrapperImage = css`
  width: 90%;
  position: relative;
  height: 20rem;
  margin: 0 auto -5rem auto;
`;
export const namePokemon = css`
  font-size: 3rem;
  margin-bottom: 0.25rem;
  text-transform: capitalize;
`;
export const typePokemon = css`
  font-size: 1.5rem;
  font-weight: 300;  
  text-transform: capitalize;
  margin-top: -0.25rem;
  text-decoration: underline;
`;