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
`
export const labelOwned = css`
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  background-color: #0e0e0e;
  display: inline-block;
  color: #fff;
  font-weight: 700;
  font-size: 0.75rem;
  max-width: max-content;
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
`;
export const typePokemon = css`
  font-size: 2rem;
  font-weight: normal;  
  margin-bottom: -0.5rem;
`;
export const wrapperFooter = css`
  display: flex;
  align-items: center;
  gap: .5rem;
`;
export const wrapperHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const buttonsearch = css`
  border: 0;
  outline: none;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`