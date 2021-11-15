export const navigation = `
  padding: 1rem 0;
  width: 100%;
  margin-top: 2rem;

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
      background-color: #fff;
    }
    & span.active {
      width: 2rem;
    }
  }
`