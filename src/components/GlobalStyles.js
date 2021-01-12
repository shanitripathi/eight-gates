import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box

}
body{
    /* font-family:'Montserrat',sans-serif; */
    font-family:futura;
    /* background-color:#202020; */
   height:100%;
   position:relative;
  
    
    
}

h2{

    font-weight:bolder;
    color:#333;
   
    
}
h5{
    font-size:1.2rem;
    
    font-weight:bold;
}
a{
    text-decoration:none;
    /* color:#333; */
}
img{
    display:block;
}
`;

export default GlobalStyle;
