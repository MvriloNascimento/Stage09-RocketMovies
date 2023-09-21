import { useState } from "react";
import {FiMail} from "react-icons/fi";
import {RiLockPasswordLine} from "react-icons/ri";
import { Link  } from "react-router-dom";
import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import{ ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/auth";

export function SignIn(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const {signIn} = useAuth();  

function handleSignIn(){
signIn({email, password})
}

return(
<Container>
<div className="login">
<Form>
<h1>RocketMovies</h1>

<p>Application to keep track of everything you watch.</p>
<h2>Log in</h2>

<Input
placeholder="E-mail"
type ="mail"
icon={FiMail} 
onChange= {e => setEmail(e.target.value)}
/>

<Input
id="password"
placeholder="Password"
type ="password"
icon={RiLockPasswordLine} 
onChange= {e => setPassword(e.target.value)}
/>

<Button 
title="Enter" 
onClick={handleSignIn}
/>
</Form>

<Link to="/register">
<ButtonText 
title="Create Account" 
/>
</Link>

</div>

<Background />

</Container>
)
};