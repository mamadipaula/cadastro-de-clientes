import styled from "styled-components";

export const StyledSection = styled.section`
  width: 90%;
  max-width: 1000px;
  height: 70vh;
  background-color: #000;
  margin: 50px auto;
  padding: 30px;
  scrollbar-width: none;
  border-radius: 8px;

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  .section-header > h2 {
    font-size: 1.2rem;
    color: #fff
  }

  .section-header > button {
    background-color: transparent;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border: none;
    color: #815BD5;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #fff
  }
`;

export const StyledCard = styled.li`
  list-style: none;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    font-size: 0.9rem;
    margin-bottom: 5px;
  }

  span {
    font-size: 0.8rem;
  }
`;
