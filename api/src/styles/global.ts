import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
:root {
    /* COLOR */
    --bg-primary-color: #292A2D;
    --bg-secondary-color: #333333;
    --bg-tertiary-color: #58595B;

    --font-primary-color: #fff;
    --font-secondary-color: #54c5cd;
    --font-tertiary-color: #58595B;

    --alert-red-color: #FF261B;
    --alert-yellow-color: #FBFB38;
    --alert-green-color: #10CD00;
    --alert-gray-color: #B4B4B4;


    /* FONT */
    --size-fonte: 16px;
    
    }

    * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: var(--font-primary-color);
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: black;
    }
    
`