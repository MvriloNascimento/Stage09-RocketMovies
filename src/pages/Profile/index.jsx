import { useState } from "react";
import { FiArrowLeft, FiUser, FiMail, FiCamera } from "react-icons/fi";
import {RiLockPasswordLine} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Container, Form, Avatar } from "./styles";
import {Button} from "../../components/Button"; 
import { ButtonText } from "../../components/ButtonText";
import {Input} from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import {api} from "../../services/api";



export function Profile (){
const { user, updateProfile } = useAuth();
const navigate= useNavigate();

const [name, setName] = useState(user.name);
const [email, setEmail] = useState(user.email);
const [old_password, setOld_password] = useState();
const [password, setPassword] = useState();

const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

const [avatar, setAvatar] = useState(avatarUrl);
const [avatarFile, SetAvatarFile] = useState(null);

function goBack(){
navigate(-1);
}

async function handleUpdate(){
const update = {
name,
email,
old_password : old_password,
password : password,
};
const userUpdate = Object.assign(user, update)
await updateProfile({user: userUpdate, avatarFile});
navigate(-1)
};

function handleChangeAvatar(event){
const file = event.target.files[0];
SetAvatarFile(file);

const imagePreview = URL.createObjectURL(file);
setAvatar(imagePreview);
}

return(
<Container>
<header>

<ButtonText 
title={<> <FiArrowLeft /> Back</>}  
onClick={goBack}
/>

</header>
<Form>

<Avatar>
<img src={avatar}
alt="Users photo" />
<label htmlFor="avatar">
<FiCamera />
<input 
id="avatar" 
type="file" 
onChange={handleChangeAvatar}
/>
</label>
</Avatar>

<Input
placeholder="Name"
type ="text"
icon={FiUser} 
value={name}
onChange={e=> setName(e.target.value)}
/>

<Input
placeholder="E-mail"
type ="mail"
icon={FiMail} 
value={email}
onChange={e=> setEmail(e.target.value)}
/>

<Input
placeholder="current password"
type ="password"
icon={RiLockPasswordLine} 
onChange={e=> setOld_password(e.target.value)}
/>

<Input
placeholder="New password"
type ="password"
icon={RiLockPasswordLine} 
onChange={e=> setPassword(e.target.value)}
/>

<Button title="Save" 
onClick={handleUpdate}
/>
</Form>
</Container>
)
}