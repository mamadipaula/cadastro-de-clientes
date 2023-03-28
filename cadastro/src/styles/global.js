import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    button {
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        color: black;
        border: 1px solid black;
        padding: 7px;
        border-radius: var(--border-radius);
    }
    
    input{
        border: 1px solid black;
        padding: 7px 7px 7px 10px;
        border-radius: var(--border-radius);
    }

`;
