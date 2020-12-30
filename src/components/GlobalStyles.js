import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box

}
body{
    font-family:'Montserrat',sans-serif;
    
    
}

h2{
    font-family: 'Montserrat', sans-serif;
    font-weight:bolder;
    color:#333;
   
    
}
h5{
    font-size:1.2rem;
    color:#333;
    font-weight:bold;
}
a{
    text-decoration:none;
    color:#333;
}
img{
    display:block;
}
`;

export default GlobalStyle;
