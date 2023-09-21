import styled from "styled-components";

export const Container = styled.div`
background: ${({theme}) => theme.COLORS.BACKGROUND_707};
width: 100%;
height: 21rem;
border: none;
border-radius: 1.6rem;
padding: 3.2rem;
margin-bottom: 2rem;

h1{ 
color: ${({theme}) => theme.COLORS.WHITE};
font-size: clamp(1rem, 1rem + 1vw, 2.4rem);
text-transform:uppercase;
}

svg{
font-size: clamp(1rem, 1rem + 1vw, 2.4rem);
}



p{
font-size: clamp(.6rem, .6rem + 1vw, 1.6rem);
line-height: 1.8rem;
height: 3.6rem;
overflow: hidden;
color: ${({theme}) => theme.COLORS.GRAY_808};
margin-top: .6rem;
position: relative;

a{
color: ${({theme}) => theme.COLORS.WHITE};
position: absolute;
right:0;
top: 2.2rem;
font-weight: 700;

&:hover{
transform: scale(1.2);
}
}
}

footer{

display: flex;
flex-direction: row;
align-items: center;
margin-top: 2rem;

>li{
list-style: none;
}

*{
background: transparent;
display: flex;
align-items: center;
justify-content: center;
border:.2rem solid ${({theme}) => theme.COLORS.PINK};
border-radius:1rem;
color: ${({theme}) => theme.COLORS.GRAY_808};
padding:.6rem;
margin-right:.6rem;
height: 2.4rem;
font-size: clamp(.3rem, .3rem + 1vw, 1.4rem);
font-weight: 400;
}
}
`;