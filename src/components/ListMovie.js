import CardMovie from "./CardMovie"
import notFound from "../error.png"
import FilterMovie from "./FilterMovie"
import AddMovie from "./Addmovie"

const ListMovie=({movies,textLive,rate,setMovies,setRate,setTextLive})=>{



    var x =movies.filter((el,i,t)=> el.title.toUpperCase().includes(textLive.toUpperCase()) && el.rating >= rate)
    return (
        <div>
        <div className='filterAdd'>
        
        
        <FilterMovie textLive={textLive} rate={rate} setTextLive={setTextLive} setRate={setRate}/>
        <AddMovie setMovies={setMovies} movies={movies}/>
    </div>

        <div className="ListMovies"> 
        {
        x.length === 0 ? <img src= {notFound} alt="not found"/> : x.map((el,i,t)=> <CardMovie el={el} />)
        }
        </div>
        </div>


    )
}
export default ListMovie