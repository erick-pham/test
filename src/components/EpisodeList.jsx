/* eslint-disable react/prop-types */
export default function EpisodeList({ episodeData }) {
  return (
    <div className="mt-5 bg-gray-900 p-6 text-white shadow-lg">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
        <span className="h-6 w-1 rounded-full bg-blue-500"></span>
        Danh Sách Tập Phim
      </h2>

      <div className="space-y-8">
        {episodeData.map((server) => (
          <div key={server.blockText} className="server-group">
            {/* Server Title */}
            <div className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-gray-400">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              {server.blockText}:
            </div>

            {/* Episode Grid */}
            <div className="flex flex-wrap gap-3">
              {server.episodes.map((ep) => {
                const isActive = ep.active;
                return (
                  <a
                    key={ep.relativeLink}
                    href={`/movies/${ep.relativeLink}`}
                    className={`flex h-[45px] min-w-[45px] items-center justify-center rounded-md font-semibold transition-all duration-200 ${
                      isActive
                        ? "scale-110 bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {ep.text}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
