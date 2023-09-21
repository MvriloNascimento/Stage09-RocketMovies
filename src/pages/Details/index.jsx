import {useEffect, useState} from "react";
import {FiArrowLeft} from "react-icons/fi";
import{ BiTime } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import {api} from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import {useAuth} from "../../hooks/auth";



export function Details() {
const params = useParams();
const navigate = useNavigate();
const { user } = useAuth();
const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

const [data, setData ] = useState(null);

function goBack(){
navigate(-1)
}

async function handleRemoveFilm(){
const confirm = window.confirm("Are you sure you want to delete the Movie?")
if(confirm){
const response = await api.delete(`/notes/${params.id}`);
setData(response.data);
navigate("/");
}
}

async function fetchNote(){
const response = await api.get(`/notes/${params.id}`);
setData(response.data);
};

useEffect(() => {
fetchNote();
}, [])

    
return (
<Container >
<Header />

{
data &&
<main>

<ButtonText 
title={<> <FiArrowLeft /> Back</>}  
onClick={goBack}
/>

<div className="movieAndRating">
<h1>{data.title}</h1>
<Rating rating={data.rating} />
<strong>{`(${data.streaming_services})`}</strong>
</div>

<div className="authorAndDate">
<img src={avatarUrl} 
alt={`${user.name} - photo`} />
<strong>{`por ${user.name}`}</strong>
<span> 
<BiTime />
<span id="date" >{data.created_at}</span>
</span>
</div>

{
data.tags &&
<div className="tags">
{
data.tags.map(tag => (
<Tag 
key={String(tag.id)}
title={tag.name} />
))
}
</div>
}
<p>{data.description}</p>
{
}

<footer>
<Button 
title="Delete Movie" 
onClick={handleRemoveFilm}
/>
</footer>

</main>
}
</Container>
)
};


