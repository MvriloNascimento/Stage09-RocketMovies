import styled from "styled-components";

export const Container = styled.span`
padding: 0 .6rem;
margin-right: .8rem;
border-radius: .8rem;
background: ${({theme}) => theme.COLORS.BACKGROUND_707};
color: ${({theme}) => theme.COLORS.GRAY_808};
display: flex;
align-items: center;
justify-content: center;
font-size: clamp(.4rem, .4rem + 1vw, 1.6rem);
text-transform: lowercase;
font-weight: 400;
`;