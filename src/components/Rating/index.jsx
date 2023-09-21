import { Container } from "./styles"; 
import {AiFillStar, AiOutlineStar} from "react-icons/ai"


export function Rating({ rating, ...rest }) {
return (
<Container type="button" {...rest}>
{[...Array(5)].map((_, index) =>
index < rating ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
)}
</Container>
);
}