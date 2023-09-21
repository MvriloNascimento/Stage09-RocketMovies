import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
margin-top:.9rem;

>svg{
color: ${({theme}) => theme.COLORS.PINK};
height:2.4rem;
}
`;