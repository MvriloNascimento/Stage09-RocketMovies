import{ useState, useEffect } from "react";
import {FiArrowLeft} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Container, Textarea } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import {NoteItem} from "../../components/NoteItem";
import {api} from "../../services/api";

export function Create(){

const [title, setTitle] = useState("");
const [rating, setRating] = useState("");
const [streaming, setStreaming] = useState("");
const [description, setDescription] = useState("");

const [tags, setTags] = useState([]);
const [newTag, setNewTag] = useState("");

const navigate = useNavigate();

function goBack(){
navigate(-1);
}

function handleAddTags(){
setTags(prevState => [...prevState, newTag]);
setNewTag(""); 
}

function handleRemoveTag(deleted){
setTags(prevState => prevState.filter(tag => tag !== deleted));
}

async function handleNewNote(){

if(!title || !rating || !streaming){
return alert("Enter: Movie title, rating and streaming service.")
}

if(newTag){
return alert(`You must click on the + symbol to add your new Tag.`)
}
    

await api.post("/notes", {
title,
streaming_services: streaming,
rating,
description,
tags
});
alert("Film registered successfully!");
navigate(-1);
};

function handleRemoveFilm(){
setTitle("");
setRating("");
setStreaming("");
setDescription("");
setTags([]);
setNewTag("");

alert("deleted film")
navigate(-1)
}

return(
<Container>
<Header />

<main>

<ButtonText 
title={<> <FiArrowLeft /> Back</>}  
onClick={goBack}
/>

<h1>New Movie</h1>

<div className="movieAndRating">
< Input 
type="text" 
placeholder="Title" 
value={title}
onChange = {e=> setTitle(e.target.value)}
/>

<Input
type="number"
list="options"
placeholder="✮✮✮✮✮"
value={rating}
onChange={e => {
const inputValue = e.target.value;
const numericValue = parseInt(inputValue);

if (numericValue >= 1 && numericValue <= 5) {
setRating(numericValue);
}
}}
/>

<datalist id="options">
<option value="1" />
<option value="2" />
<option value="3" />
<option value="4" />
<option value="5" />
</datalist>

< Input 
type="text" 
placeholder="Streaming" 
value={streaming}
onChange = {e=> setStreaming(e.target.value)}
/>
</div>

<Textarea 
placeholder="Comments" 
value={description}
onChange = {e=> setDescription(e.target.value)}
/>

<h2>Tags</h2>

<div className="tags">

<NoteItem 
isNew 
placeholder="New Tag"
value={newTag}
onChange={e => setNewTag(e.target.value)}
onClick={handleAddTags}
/> 

{
tags.map((tag, index) =>(
<NoteItem
key={String(index)}
value={tag}
onClick={() => handleRemoveTag(tag)}
/>
))
}
</div>

<div className="action">
<Button 
title= "Delete"
onClick={handleRemoveFilm}
/>
<Button 
title="Save"
onClick={handleNewNote}
/>
</div>
</main>
</Container>
)
}