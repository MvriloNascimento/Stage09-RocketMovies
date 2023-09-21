import styled from "styled-components";

export const Container = styled.button`
width: 100%;
height: 4.8rem;
padding: 0 1.6rem;
margin-top: 2.4rem;
background-color: ${({theme}) => theme.COLORS.PINK};
border: 0;
border-radius: 1rem;
color: ${({theme}) => theme.COLORS.GRAY_707};
font-weight: 500;

&:disabled{
opacity: 0.5;

}

`;