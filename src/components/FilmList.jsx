/* eslint-disable react/prop-types */
export const FilmList = ({ listName, films }) => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="mb-6 border-l-4 border-red-500 pl-2 text-2xl font-bold">
        {listName}
      </h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-6">
        {films.map((film, index) => (
          <li
            key={index}
            className="relative transform overflow-hidden rounded-lg bg-white shadow-md transition hover:scale-105"
          >
            {/* Label */}
            <span className="absolute top-2 left-2 z-10 rounded bg-red-500 px-2 py-1 text-xs text-white">
              {film.label}
            </span>

            {/* Image */}
            <div className="relative min-h-[350px] w-full">
              <a href={`movies/${film.slug}`} rel="noopener noreferrer">
                <img
                  loading="lazy"
                  decoding="async"
                  src={film.imgSrc}
                  alt={film.label}
                  className="object-cover"
                />
              </a>
            </div>

            {/* Title */}
            <div className="p-3">
              <a
                href={`movies/${film.slug}`}
                rel="noopener noreferrer"
                className="font-semibold text-gray-800 hover:text-red-500"
              >
                {film.name}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
