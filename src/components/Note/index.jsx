import { useNavigate } from "react-router-dom";

import {Container} from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function Note({data, ...rest }){
const navigate = useNavigate();

function handleDetails(id){
navigate(`/details/${id}`)
}

return(
<Container {...rest}>
<h1>{data.title}</h1>
<Rating rating={data.rating} />
<p><>{data.description} <a href="#">...</a></></p>
{
data.tags &&
<footer>
{
data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
}
</footer>
}
</Container>
)
}