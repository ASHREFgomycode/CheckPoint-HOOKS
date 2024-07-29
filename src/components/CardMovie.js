import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';


const CardMovie=({el})=>{
    const [readMore, setReadMore] = useState(false);
    return (
        
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterURL} />
      <Card.Body>
        <Card.Title> {el.title} </Card.Title>
       
        <Card.Text>{readMore ? el.description : `${el.description.substring(0, 40)}...`} 
        <button className= {readMore ? 'buttMoreRED' : 'buttMoreGREEN'} onClick={()=> setReadMore(!readMore)}> {readMore ? 'Show less   ' : 'Show more'} </button>
        </Card.Text>
        
        <br/>
        <Rating name="read-only" value={el.rating} readOnly />
      </Card.Body>
    </Card>
        
    )
}
export default CardMovie