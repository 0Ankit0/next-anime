import { useRouter } from "next/router";
import Layout from "../Layout";
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

function searchResult({ animeArr }: PropsType) {
  const router = useRouter();
  const { value } = router.query;
  const searchValue = value as string;
  return (
    <Layout>
      <h1 className="leftLine">You searched for {searchValue}</h1>
      {animeArr
        .filter((fname) => fname.Anime_Name.includes(searchValue))
        .map((card, cardIndex) => (
          <div
            key={card.id}
            className="shadow-lg rounded-lg bg-gray-200 w-[380px] text-gray-700 "
          >
            <img
              src={"Uploads/Pictures/" + card.Anime_Img}
              alt=""
              className="rounded-t-lg mb-3 w-full"
            />
            <div className="flex items-center gap-2 justify-center">
              {card.Genre.split(",").map((category, cIndex) => {
                return (
                  <span
                    className="px-3 py-1 rounded-full text-xs bg-gray-300 text-center"
                    key={cIndex}
                  >
                    {category}
                  </span>
                );
              })}
            </div>
            <div className="mb-3">
              <h3 className="mb-3 font-bold text-2xl text-center">
                {card.Anime_Name}
              </h3>
            </div>
          </div>
        ))}
    </Layout>
  );
}

export default searchResult;
