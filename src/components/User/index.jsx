import{ Link, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Button } from "../Button";
import {useAuth} from "../../hooks/auth";
import {api} from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function User(){

const { signOut, user } = useAuth();
const navigate= useNavigate();

const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

function goBack(){
navigate("/");
signOut();
}

return(
<Container>
<div>

<strong>{user.name}</strong>

<Button 
title="Back" 
onClick={goBack}
/>

</div>
<Link to="/profile">
<img src={avatarUrl} 
alt={`${user.name} - photo`} />
</Link>
</Container>
)
}