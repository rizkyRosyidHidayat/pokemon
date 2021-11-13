export const header = `
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
    background-color: #fff;
  }
`
export const fixed = `
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
`