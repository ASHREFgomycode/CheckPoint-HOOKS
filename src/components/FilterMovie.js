import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';



const FilterMovie=({setTextLive ,setRate, textLive , rate})=>{
    const handelReset=()=>{
        setTextLive('')
        setRate(0)
    }
    return(
 
  <div>
            <input value={textLive} type='text' onChange={(e)=>setTextLive(e.target.value)} />
            <Rating value={rate} name="simple-controlled" onChange={(e)=>setRate(e.target.value)}/>
            <Button variant="dark" onClick={handelReset}>Reset</Button>
        </div>
        
    )
}
export default FilterMovie