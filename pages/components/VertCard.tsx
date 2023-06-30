type PropsType = {
  animeArr: {
    id: number;
    Anime_Name: string;
    Anime_Img: string;
    Anime_Description: string;
    Studios: string;
    Genre: string;
    Rating: number;
    Views: number;
  }[];
};
function Vertanime({ animeArr }: PropsType) {
  return (
    <div className="container mx-8 my-7">
      <h1 className="leftLine relative pl-16 font-semibold text-[2rem] mb-4">
        Top Views
      </h1>
      <div className="flex gap-6 md:grid-cols-3 text-gray-800 flex-col">
        {animeArr.map((anime, animeIndex) => (
          <div
            key={animeIndex}
            className="shadow-lg rounded-lg bg-gray-200 h-40 flex flex-col justify-end text-center w-[420px]"
            style={{
              backgroundImage: `url(Uploads/Pictures/${anime.Anime_Img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="mb-3">
              <h3 className="mb-3 font-bold text-2xl  text-slate-200">
                {anime.Anime_Name}
              </h3>
            </div>
            <div className="m-4">
              {anime.Genre.split(",").map((category, cIndex) => (
                <span
                  className="px-3 py-1 rounded-full text-xs bg-gray-300"
                  key={cIndex}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vertanime;
