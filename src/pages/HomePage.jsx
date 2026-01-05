import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
import { FilmList } from "../components/FilmList";

const HomePage = () => {
  const [listFilm, setListFilm] = useState([]);
  // const { allMovies, setAllMovies, loading, setLoading, setQueryParams } =
  //   useMoviesStore();

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setListFilm(data));
  }, []);

  return listFilm.map((film) => {
    return (
      <FilmList key={film.section} films={film.film} listName={film.section} />
    );
  });
};

export default HomePage;
