import Link from "next/link";
import { useRouter } from "next/router";

type PropsType = {
  title: string;
  catBy?: string;
  maxCards?: number;
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

function CatCard({ maxCards, catBy, title, animeArr }: PropsType) {
  const router = useRouter();

  // Filter animeArr based on catBy value if it is provided
  const filteredAnimeArr = catBy
    ? animeArr.filter((anime) => anime.Genre.split(",").includes(catBy))
    : animeArr;
  const MaxNoOfCards = maxCards
    ? filteredAnimeArr.slice(0, maxCards)
    : filteredAnimeArr;
  return (
    <div className="container mx-auto my-7 ">
      <div className="flex justify-between">
        <h1 className="leftLine ">{title}</h1>
        <h1 className="flex gap-2">
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </h1>
      </div>
      <div className="grid gap-6 md:grid-cols-3  text-gray-800">
        {MaxNoOfCards.map((anime, animeIndex) => (
          <Link
            href={{
              pathname: "./Anime-info/[anime]",
              query: { anime: anime.id },
            }}
            key={anime.id}
          >
            <div className="shadow-lg rounded-lg bg-gray-200 w-[250px] h-[350px]">
              <img
                src={"Uploads/Pictures/" + anime.Anime_Img}
                alt=""
                className="rounded-t-lg mb-3 w-full h-[200px] object-cover"
              />

              <div className="grid grid-cols-3 ">
                {anime.Genre.split(",").map((category, cIndex) => (
                  <span
                    className="px-3 p-1 rounded-full text-xs bg-gray-300 text-center my-[2px]"
                    key={cIndex}
                  >
                    {category}
                  </span>
                ))}
              </div>
              <div className="mb-3">
                <h3 className="mb-3 font-bold text-2xl text-center">
                  {anime.Anime_Name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CatCard;
