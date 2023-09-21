import styled from "styled-components";

export const Container = styled.header`
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

h1{
color: ${({theme}) => theme.COLORS.PINK};  
font-size: clamp(.8rem, .8rem + 1vw, 2.4rem);
font-weight: 700;
}

`;