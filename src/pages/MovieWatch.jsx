import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EpisodeList from "../components/EpisodeList";
import ReactPlayer from "react-player";
const apiUrl = import.meta.env.VITE_API_URL;

function MovieWatch() {
  const { movieId, episode } = useParams();
  // const { episode } = useSearchParams();
  const [data, setData] = useState(null);
  // const { allMovies, setAllMovies, loading, setLoading, setQueryParams } =
  //   useMoviesStore();
  console.log("episode", episode);
  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(`${apiUrl}?type=episode&slug=${movieId}&episode=${episode}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [movieId, episode]);

  // if (episode) {
  //   navigate(`/movies/${movieId}/${episode}`);
  // }

  return (
    <>
      {data?.content?.contentUrl && (
        <ReactPlayer
          src={data.content.contentUrl}
          controls
          style={{
            width: "70%",
            height: "70%",
          }}
        />
      )}
      <a
        href={`/movies`}
        className={`m-5 flex h-[45px] min-w-[45px] items-center justify-center rounded-md bg-gray-800 font-semibold text-gray-300 transition-all duration-200 hover:bg-gray-700 hover:text-white`}
      >
        Back to Movies
      </a>
      <EpisodeList episodeData={data?.listEpisodeSection || []} />
    </>
  );
}
export default MovieWatch;
