import CardMovie from "./CardMovie"
import notFound from "../error.png"
const ListMovie=({movies ,textLive,rate})=>{
    var x =movies.filter((el,i,t)=> el.title.toUpperCase().includes(textLive.toUpperCase()) && el.rating >= rate)
    return (
        <div className="ListMovies"> 
        {
        x.length == 0 ? <img src= {notFound} /> : x.map((el,i,t)=> <CardMovie el={el} />)
        }
        </div>
    )
}
export default ListMovie