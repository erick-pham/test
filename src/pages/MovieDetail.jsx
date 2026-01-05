import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

function MovieDetail() {
  const navigate = useNavigate();
  const { movieId } = useParams();

  const [episode, setEpisode] = useState("");
  // const { allMovies, setAllMovies, loading, setLoading, setQueryParams } =
  //   useMoviesStore();

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(`${apiUrl}?type=detail&slug=${movieId}`)
      .then((res) => res.json())
      .then((data) => setEpisode(data.episode));
  }, []);

  if (episode) {
    navigate(`/movies/${movieId}/watch/${episode}`);
  }

  return <>{movieId}</>;
}
export default MovieDetail;
