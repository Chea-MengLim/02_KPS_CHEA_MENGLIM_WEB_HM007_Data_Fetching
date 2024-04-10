import {
  getAllMoviesService
} from "@/services/movies.service";
import CardContainerComponent from "./compoents/CardContainerComponent";
const HomePage = async () => {
  // get all movies
  var movies = await getAllMoviesService();
  movies = movies?.payload;
  // store all genre to display dinamic (all genre must be unique)
  var allGenres = [];
  movies.map((movie) => {
    if (!allGenres.includes(movie.genre)) 
    allGenres.push(movie.genre);
  });

  // method use to filter movies by genre 
  function getMoviesByGenre(movies, genre){
    return movies?.filter(movie => movie.genre === genre);
  }

  return (
    <div>
      <div>
        <img
          src="https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x"
          alt="image"
        />
      </div>
      <section className="bg-red-950 px-10 pt-5 pb-10">
        {/* call to all movies */}
        <section>
          <CardContainerComponent movies={movies} label="All Movies" />
        </section>

        {/* call movies dynamic by genre */}
        {allGenres.map((genre, index) => {
          return (
            <section key={index}>
              <CardContainerComponent movies={getMoviesByGenre(movies, genre)} label={genre} />
            </section>
          );     
        })}       
      </section>
    </div>
  );
};

export default HomePage;
