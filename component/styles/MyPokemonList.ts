export const pokemonList = `
  background-color: #fff;
  padding-top: 5rem;
  min-height: 100vh;

  & p.title{
    font-size: 2rem;
    font-weight: 900;
    color: #282828;
  }

  & p.message-empty{
    font-size: 4rem;
    color: #c3c0c0;
    font-weight: 900;
  }

  ul{
    margin-top: -4rem;
    margin-bottom: 3rem;
  }

  ul li{
    margin-top: 3.5rem;
  }

  & div.card{
    background-color: red;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0rem 1.5rem 1rem 1.5rem;
    color: #fff;
  }

  & div.wrapper-img{
    flex-shrink: 0;
    margin-top: -2rem;
    margin-right: -2rem
  }

  & h2.name-pokemon{
    font-size: 2rem;
    margin-bottom: 0.25rem;
    text-transform: capitalize;
  }

  & div.wrapper-btn{
    margin-top: 1rem;
    margin-bottom: -2rem;
  }
`