import styled from "styled-components";


export const Container = styled.div`
height: 100vh;
width: 100%;
display: grid;
grid-template-rows: 11.6rem auto;
grid-template-areas:
"header"
"content"
;

main{
padding: 0 5rem;
grid-area: content;
overflow-y: auto;

.movieAndRating{
display: flex;
justify-content: flex-start;
align-items: center;
gap: 1rem;
height: 6rem;
margin:2.4rem 0;

>h1{
color: ${({theme}) => theme.COLORS.WHITE};
font-size: clamp(1.2rem, 1.2rem + 1vw, 2.4rem);
font-weight: 500;
margin-top:.2rem;
text-transform: uppercase;
}

>svg{
font-size: clamp(1.2rem, 1.2rem + 1vw, 2.4rem);
}

>strong{
font-size: clamp(.6rem, .6rem + 1vw, 1.6rem);
color: white;
font-style:italic;
text-transform:uppercase;
}
}

.authorAndDate{
display: flex;
align-items: center;
margin-bottom: 4rem;
gap: 1rem;
color: ${({theme}) => theme.COLORS.WHITE};

>img{
width: 1.6rem;
height: 1.6rem;
border-radius: 50%;
}

>strong{
font-size: clamp(.6rem, .6rem + 1vw, 1.6rem);
}

>span{
display:flex;
align-items: center;
font-size: clamp(.6rem, .6rem + 1vw, 1.6rem);


svg{
font-size: clamp(.6rem, .6rem + 1vw, 1.6rem);
margin-right: .8rem;
color: ${({theme}) => theme.COLORS.PINK};
}
}
}

.tags{
display: flex;
flex-direction: row;
justify-content:start;
margin-bottom: 4rem;

*{
border: .1rem solid ${({theme}) => theme.COLORS.PINK};
color: white;
}
}

p{
border:none;
width: 80%;
margin: 0 auto;
font-size: clamp(.6rem, .6rem + 1vw, 1.6rem);
line-height: 2.1rem;
text-align: justify;
font-weight: 400;
color: ${({theme}) => theme.COLORS.WHITE};
display: flex;
align-items: center;
text-align: justify;
justify-content: center;
}

footer{
width: 80%;
margin:1.4rem auto;
display: flex;
justify-content: flex-end;

button{
width: auto;
height: 3rem;
font-size: clamp(.4rem, .4rem + 1vw, 1.6rem);
}
}
}
`;

