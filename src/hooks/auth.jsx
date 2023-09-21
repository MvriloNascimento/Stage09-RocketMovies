import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({children}){

const [data, setData] = useState([]);


async function signIn({email, password}){
try {
const response = await api.post("/sessions", {email, password});
const { user, token } = response.data;

localStorage.setItem("@rocketMovies:user", JSON.stringify(user));
localStorage.setItem("@rocketMovies:token", token);

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
setData({user, token});

   
} catch(error) {
if(error.response){
alert(error.response.data.message);
}else{
alert("Unable to access.")
}  
}

}

function signOut(){
localStorage.removeItem("@rocketMovies:user");
localStorage.removeItem("@rocketMovies:token");

setData({});
}

async function updateProfile({user, avatarFile}){

  

try {

if(avatarFile){
const fileUploadForm = new FormData();
fileUploadForm.append("avatar", avatarFile)

const response = await api.patch("/users/avatar", fileUploadForm);
user.avatar = response.data.avatar;
}


await api.put("/users", user);
localStorage.setItem("@rocketMovies:user", JSON.stringify(user));

setData({user, token: data.token})
alert("Profile updated successfully!");

    
} catch (error) {
if(error.response){
alert(error.response.data.message)
}else{
alert("Unable to update profile!")
}    
}

}


useEffect(() => {
const user = localStorage.getItem("@rocketMovies:user");
const token = localStorage.getItem("@rocketMovies:token");

if(user && token){
api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
setData({
user: JSON.parse(user),
token});
}

}, [])

return(
<AuthContext.Provider value={{
user: data.user,
signIn,
signOut,
updateProfile
}}>
{children}
</AuthContext.Provider>
)
};

function useAuth(){
const context = useContext(AuthContext);
return context;
}

export { AuthProvider, useAuth }