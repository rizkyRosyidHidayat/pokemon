export const card = `
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0rem 1.5rem 1rem 1.5rem;
  color: #fff;

  & div.wrapper-img{
    flex-shrink: 0;
    margin-top: -2rem;
    margin-right: -2rem
  }

  & h2.name-pokemon{
    font-size: 2rem;
    text-transform: capitalize;
  }

  & div.wrapper-btn{
    margin-top: 1rem;
    margin-bottom: -2rem;
  }

  & ul.list-types{
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`