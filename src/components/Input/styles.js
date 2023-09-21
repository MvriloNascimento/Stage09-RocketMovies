import styled from "styled-components";

export const Container = styled.div`
margin: 1rem 0;
background: ${({theme}) => theme.COLORS.BACKGROUND_808};
height: 5.6rem;
display: flex;
flex-direction: row;
align-items: center;
border: none;
border-radius: 1rem;
width: 100%;  

>svg{
color:${({theme}) => theme.COLORS.GRAY_808};
padding-left:.6rem;
}

>input{
width: 100%;  
height: 5.6rem;
display: flex;
align-items: center;
background:transparent; 
border-radius: 1rem;
border: none;
color: ${({theme}) => theme.COLORS.WHITE};
padding-left:.6rem;

&::placeholder{
color:${({theme}) => theme.COLORS.GRAY_808};
font-size: clamp(1rem, 1.2rem + 1vw, 1.6rem);
}
}
`;