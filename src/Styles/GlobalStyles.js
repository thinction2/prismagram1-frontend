import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    * {
        box-sizing: border-box;
    }
    body{
        background-color: ${(props) => props.theme.bgColor};
        color:${(props) => props.theme.balckColor};
        font-size: 14px;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 140px;
    }
    a {
        color: ${(props) => props.theme.buleColor};
        text-decoration: none;
        
    }
    input:focus{
        outline: none
    }
    

`;
