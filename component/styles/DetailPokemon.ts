export const detailPokemon = `
  width: 100%;
  min-height: 100vh;
  padding-top: 8rem;

  & div.wrapper-card{
    max-height: 300px;
    overflow: auto;
  }
  & ul.list-type{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  & ul.list-move{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
`

export const cardPokemon = `
  background-color: #fefefe;
  padding: 1.5rem 2rem;
  border-radius: 2.5rem 2.5rem 0 0;
  width: 100%;
`
export const wrapperImage = `
  width: 90%;
  position: relative;
  margin: 0rem auto 2rem auto;
`;
export const namePokemon = `
  font-size: 3rem;
  margin-bottom: 0.25rem;
  text-transform: capitalize;
`;
export const typePokemon = `
  font-size: 1.5rem;
  font-weight: 300;  
  text-transform: capitalize;
  margin-top: -0.25rem;
  text-decoration: underline;
`;