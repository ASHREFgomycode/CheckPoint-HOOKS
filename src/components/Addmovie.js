import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';

const AddMovie=( {setMovies,movies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle ]= useState('');
    const [description,setDescreption]=useState('');
    const [posterURL,setPosterURL]=useState('');
    const [rating,setRating]=useState(0)
    
    const AddMovie=()=> setMovies([...movies,{title,description,posterURL,rating , id:Math.random()}])
    return(
      
        <>
        <Button variant="primary" onClick={handleShow}>
         Click to add movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add your movie here !</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title :</Form.Label>
        <Form.Control type="text" placeholder="Enter the name" onChange={(e)=>setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description :</Form.Label>
        <Form.Control type="text" placeholder="Enter the name" onChange={(e)=> setDescreption(e.target.value)} />
        </Form.Group>




        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Picture link :</Form.Label>
        <Form.Control type="text" placeholder="Enter the name" onChange={(e)=>setPosterURL(e.target.value)} />
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating :</Form.Label>
        <br/> 
        <Rating name="simple-controlled" onChange={(e)=>setRating(e.target.value)} />
        </Form.Group>

      
      
    </Form>



          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{AddMovie();handleClose()}}>
              Add now
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        
    )
} 
export default AddMovie