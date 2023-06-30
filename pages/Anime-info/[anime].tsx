import Layout from "../Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

interface AnimeInfo {
  id: number;
  Anime_Name: string;
  Anime_Img: string;
  Anime_Description: string;
  Studios: string;
  Genre: string;
  Rating: number;
  Views: number;
}
function Anime() {
  const [animeInfo, setanimeInfo] = useState<AnimeInfo[]>([]);
  const router = useRouter();
  const { anime } = router.query;
  useEffect(() => {
    axios
      .post(`http://localhost:8000/Anime-info/${anime}`)
      .then((res) => {
        setanimeInfo(res.data);
        console.log(res.data.Anime_Img);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [anime]);

  return (
    <Layout>
      {animeInfo.map((filteredCard, index) => (
        <div className="flex m-8" key={filteredCard.id}>
          <div>
            <img
              src={"../Uploads/Pictures/" + filteredCard.Anime_Img}
              alt="Error loading image"
              className="w-[400px] h-[400px]"
            />
          </div>
          <div className="ml-16">
            <p className=" text-2xl font-bold">{filteredCard.Anime_Name}</p>
            <p className="text-justify w-[80ch] my-8">
              {filteredCard.Anime_Description}
            </p>
          </div>
        </div>
      ))}
    </Layout>
  );
}

export default Anime;
