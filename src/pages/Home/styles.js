import styled from "styled-components";

export const Container = styled.div`

width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 11.6rem auto;
grid-template-areas:
"header"
"content"
;

>main{
grid-area: content;
padding: 0 5rem;
overflow-y: auto;


}

.MyFilms{
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 2.4rem;



>h1{
font-size: clamp(1rem, 1rem + 1vw, 3rem);
line-height: 4.2rem;
font-weight: 400;
color: ${({theme}) => theme.COLORS.WHITE};
width: 35%;
}

button{
width: auto;
height: 3rem;
font-size: clamp(.4rem, .4rem + 1vw, 1.6rem);
display: flex;
align-items: center;
margin: 0;
}
}

.Movie{
overflow-y:auto;
background: transparent;
width: 100%;
height: 80%;
border: none;
border-radius: 1.6rem;
padding:0 .6rem;
}
`;

export const Header = styled.div `

background-color: transparent;
grid-area: header;
width: 100%;
padding:2rem;


display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;

border-bottom-width: 100%;
border-bottom: .1rem solid ${({theme}) => theme.COLORS.GRAY_707};

>h1{
color: ${({theme}) => theme.COLORS.PINK};  
font-size: clamp(1.2rem, 1.2rem + 1vw, 2.4rem);
font-weight: 700;

}


input{
background: ${({theme}) => theme.COLORS.BACKGROUND_808};
width: 18vw;
height: 5.6rem;
padding:.3rem;
margin-right: 3rem;
margin-left: 1rem;
border: none;
border-radius: 1rem;

color: ${({theme}) => theme.COLORS.WHITE};
font-size: clamp(.4rem, .4rem + 1vw, 1.6rem);

&::placeholder{
font-size: clamp(.2rem, .2rem + 1vw, 1.6rem);

}
}

`;