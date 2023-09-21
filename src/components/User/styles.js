import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: end;
width: 19vw;
margin-left: 3rem;

div{
display: flex;
flex-direction:column;
align-items: center;
justify-content:flex-end;

strong{
margin-top: 1rem;
font-size: clamp(.6rem, .6rem + 1vw, 1.6rem);
font-weight: 400;
color: ${({theme}) => theme.COLORS.WHITE};
}

>a{
width: 100%;
margin-right:0;
}

button{
display: flex;
justify-content: end;
height: auto;
margin-top:4px;
padding: 0;
font-size: clamp(.9rem, .9rem + 1vw, 1.6rem);
font-weight: 500;
border: none;
background: none;
color:${({theme}) => theme.COLORS.GRAY_808};

&:hover{
color:${({theme}) => theme.COLORS.WHITE};
}
}
}

img{
width: 5rem;
height: 5rem;
border-radius: 50%;
margin-left: .9rem;
}
`;