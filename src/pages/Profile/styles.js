import styled from "styled-components";

export const Container = styled.div`
width: 100%;

header{
padding: 0 5rem;
width: 100%;
height: 14.5rem;
background: ${({theme}) => theme.COLORS.BACKGROUND_707};
display: flex;
align-items: center;
}
`;


export const Form = styled.form`
padding: 0 1rem;
max-width: 34rem;
margin: 6.3rem auto 0;


>div:nth-child(4){
margin-top: 2.4rem;
}

>button{
margin-top: 1.4rem;
}

`;

export const Avatar = styled.div`
position: relative;
margin: -12.6rem auto 3rem;
width: 18.6rem;
height: 18.6rem;

>img{
width: 18.6rem;
height: 18.6rem;
border-radius: 50%;
}

>label{
width: 4.8rem;
height: 4.8rem;
background: ${({theme}) => theme.COLORS.PINK};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
bottom: .7rem;
right: .7rem;
cursor: pointer;

input{
display: none;
}

svg{
width: 3rem;
height: 3rem;
margin-top:0;
color: ${({theme}) => theme.COLORS.GRAY_707}; 
}
}
`;
