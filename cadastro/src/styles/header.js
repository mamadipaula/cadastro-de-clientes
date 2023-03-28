import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #000;
  padding: 20px 0px;

  .header-container {
    max-width: 1000px;
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    color: #fff
  }

  .header-container > button {
    color: #815BD5;
    background-color: transparent;
    border: none;
    font-size: 1rem;
  }

  .infos-container {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .infos-container > h2 {
    font-size: 1.2rem;
  }

  .infos-container span {
    font-size: 0.9rem;
  }
`;
