import { useState } from 'react';
import './App.css';
import NavMovie from './components/NavMovie';
import ListMovie from './components/ListMovie';
import AddMovie from './components/Addmovie';
import FilterMovie from './components/FilterMovie';

function App() {
  
  const [movies,setMovies] = useState([
    {title : 'The Gray Man', description :'Before he embraced the Kenergy in his Oscar-nominated role in Barbie, Ryan Gosling returned from his four-year acting hiatus with The Gray Man, Joe and Anthony Russo’s adaptation of Mark Greaney’s novel of the same name. Here, he’s in top form playing the enigmatic CIA hit man known only by his alias, Sierra Six, who becomes the target of a mustachioed, sociopathic assassin (Chris Evans, clearly having the time of his life getting to play the villain) after Six learns of long-hidden corruption within the agency.',posterURL:'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABWx2SQPEXODXVzetUEvVnVYjjKv0bQyBpSTTV0HI7KdhGKLIjsGPigtpiOPHnf1ZPUhgrCftEREVtXgw11GK1vYlf0FJAVNcs9CHVzgDTEafGY_tudAyDkY_ycc5kjATxeYz.webp?r=35c',rating : 4, id : Math.random()},
    {title : 'Extraction', description :'Chris Hemsworth goes full surrogate dad mode in this film about Tyler Rake, a mercenary who becomes involved with a mission to retrieve the kidnapped son of a drug lord. After Rake is betrayed and the mission grows more dangerous, he commits to stopping at nothing to get the boy home. Directed by Sam Hargrave (in his first feature film) and adapted by Joe Russo from Ande Parks’ graphic novel Ciudad, Extraction is the kind of rousing thriller that’ll keep you hooked all the way through. ',posterURL:'https://m.media-amazon.com/images/M/MV5BZjg5MTM4N2QtN2RlMS00NzBlLTg3NDktM2ExZDNmMmExMGU3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',rating : 3, id : Math.random()},
    {title : 'Heart of Stone', description :'Gal Gadot leads Tom Harper’s espionage thriller as Rachel Stone, an MI6 operative working undercover as double agent for the Charter, a shadowy network of peacekeeping spies. Stone is tasked with guarding “the Heart,” a powerful artificial intelligence system, lest it fall into the wrong hands. When an ambush results in Stone’s cover being blown, the Charter is compromised and the Heart is put in danger, putting Stone up against Keya (Alia Bhatt), a hacker with mysterious motives. ',posterURL:'https://netnaija.ng/wp-content/uploads/2023/08/WAPK4B1la0B-1.webp',rating : 5, id : Math.random()},
    {title : 'Lift', description :'Director F. Gary Gray is no stranger to a heist flick, having directed the 2003 remake of The Italian Job. He returns to the genre with Lift, which stars Kevin Hart as the leader of a band of art thieves. At the beginning of the film, they’ve recently pulled off the seemingly impossible task of boosting an NFT. Their scheme is quickly found out, but instead of arresting them, an Interpol agent (played by Gugu Mbatha-Raw) offers the team an opportunity to help catch Lars Jorgensen (Jean Reno), a billionaire working with a group of hackers, in exchange for their freedom.',posterURL:'https://m.media-amazon.com/images/M/MV5BNTBlNmEwNzQtZTc5MC00YmVjLTk5NjgtMmM0NDFmZjJkZjYzXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_FMjpg_UX1000_.jpg',rating : 2, id : Math.random()},

  ])
  const [textLive,setTextLive] = useState('')
  const [rate,setRate]=useState(0)
  
  
  return ( 
    <div>
      <NavMovie/>
      
   <div className='filterAdd'>
      
       <FilterMovie textLive={textLive} rate={rate} setTextLive={setTextLive} setRate={setRate}/>
      <AddMovie setMovies={setMovies} movies={movies} />
      
  </div>

      <ListMovie movies={movies} textLive={textLive} rate={rate} />
      
    </div>
  );
}

export default App;
