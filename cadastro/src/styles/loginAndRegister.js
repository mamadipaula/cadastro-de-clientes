import { Link } from "react-router-dom";
import styled from "styled-components";

export const FieldFormDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  div {
    background-color: #000;
    width: 90%;
    max-width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 45px 20px;
    border-radius: 28px;
  }

  form {
    width: 94%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #fff
  }

  button {
    color: #000;
    width: 100%;
    background: #815BD5;
    margin-top: 20px;
  }

  h1 {
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 20px;
    color: #fff
  }

  span {
    font-size: 13px;
    margin-bottom: 35px;
    text-align: center;
    color: #fff
  }

  label {
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-bottom: 12px;
  }

  .register-here {
    width: 94%;
    margin-top: 18px;
    margin-bottom: -7px;
    font-size: 0.75rem;
    text-align: right;
    padding-right: 3px;
  }

  .register-here > a {
    color: #fff;
  }

  .errors {
    font-size: 0.75rem;
    padding: 0;
    margin: -7px 0 0 0;
    color: #815BD5;
  }
`;

export const StyledLink = styled(Link)`
  align-self: flex-start;
  text-decoration: none;
  font-size: 22px;
  padding: 10px;
  margin-top: -33px;
`;
