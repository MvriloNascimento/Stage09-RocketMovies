import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
width: ${({isNew}) => isNew ? "15%"  : "11%"};
margin: 0 .3rem;

background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_808};
color: ${({ theme, isNew}) => isNew ? theme.COLORS.GRAY_808 : theme.COLORS.WHITE};  

border: ${({ theme, isNew}) => isNew ? `.1rem dashed ${theme.COLORS.GRAY_808}` : "none"};

border-radius: 1rem;
padding-right: .6rem;

>button{
border:none;
background:none;
}

.button-delete,
.button-add {
font-weight:500;
color: ${({ theme}) => theme.COLORS.PINK};
font-size: clamp(.4rem, .4rem + 1vw, 1.6rem);

&:hover{
transform:scale(1.2);
font-weight:700;
}
}

>input{
width:100%;
padding: .3rem;
font-size: clamp(.4rem, .4rem + 1vw, 1.6rem);
color: ${({ theme}) => theme.COLORS.WHITE};
background: transparent;
border:none;

&::placeholder{
color: ${({ theme}) => theme.COLORS.GRAY_808};
font-size: clamp(.4rem, .4rem + 1vw, 1.6rem);
}
}
`;