import {FiMail, FiUser, FiArrowLeft} from "react-icons/fi";
import {RiLockPasswordLine} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import{ ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api";


export function SignUp(){
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

function goBack(){
navigate(-1);
}

function handleSignUp(){

if(!name || !email || !password){
return alert("Please fill in all fields!")
}

api.post("/users", {name, email, password})
.then(() => {
alert("Successfully registered!")
navigate(-1)
})
.catch(error => {
if(error.response){
alert(error.response.data.message);
}else{
alert("It was not possible!");
}
});
}

return(
<Container>
<div className="logout">
<Form>
<h1>RocketMovies</h1>
<p>Application to keep track of everything you watch.</p>
<h2>Create your account</h2>

<Input
placeholder="Name"
type ="text"
icon={FiUser} 
onChange = {e => setName(e.target.value)}
/>

<Input
placeholder="Email"
type ="mail"
icon={FiMail} 
onChange = {e => setEmail(e.target.value)}
/>

<Input
id="password"
placeholder="Passoword"
type ="password"
icon={RiLockPasswordLine} 
onChange = {e => setPassword(e.target.value)}
/>

<Button 
title="Register" 
onClick={handleSignUp}
/>

</Form>

<ButtonText 
title={<><FiArrowLeft /> Back to login</>} 
onClick={goBack}
/>

</div>

<Background />

</Container>
)
}