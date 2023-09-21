import{useState, useEffect} from "react";
import{BiPlus} from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Container, Header } from "./styles";
import { Button } from "../../components/Button";
import {User} from "../../components/User";
import {Note} from "../../components/Note";
import { api } from "../../services/api";


export function Home(){
const [tags, setTags] = useState([]);
const [search, setSearch ] = useState("")
const [notes, setNotes ] = useState([]);

const navigate = useNavigate();


function handleDetails(id){
navigate(`/details/${id}`)
}


async function fetchTags(){
const response = await api.get("/tags");
setTags(response.data);
}

useEffect(() =>{
fetchTags();
}, [] );


async function fetchNotes(){
const response = await api.get(`/notes?title=${search}`);
setNotes(response.data);
}

useEffect(() =>{
fetchNotes();
}, [search] );

return(
<Container>
<Header>
<h1>RocketMovies</h1>
<input 
type="text" 
placeholder="Search by title" 
onChange={e=> setSearch(e.target.value) }
/>
<User />

</Header>

<main>

<div className="MyFilms">
<h1>My Movies</h1>
<Link to="/create">
<Button title={<> <BiPlus /> Add Movie </>} />
</Link>
</div>

<div className="Movie">
{
notes.map(note => (
<Note
key={String(note.id)}  
data={note}
onClick={() => handleDetails(note.id)}
/>
))
}
</div>

</main>
</Container>
)
}