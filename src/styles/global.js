import { createGlobalStyle} from "styled-components";


export default createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

:root{
font-size: 62.5%;
}

body{
background-color: ${({theme}) => theme.COLORS.BACKGROUND_909} ;
}

body, input, button, textarea{
font-family: 'Roboto Slab', serif;
font-size: 1.6rem;
outline: none;
-webkit-font-smoothing: antialiased;


}


a{
text-decoration: none;
}

button{
cursor: pointer;
transition: 0.3s;
}

button:hover, a:hover{
filter: brightness(0.9);
} 
`;



