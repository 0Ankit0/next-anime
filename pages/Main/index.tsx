import Layout from "../Layout";
import CatCard from "../components/CatCard";
import Slider from "../components/Slider";
import VertCard from "../components/VertCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [animeInfo, setanimeInfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/main")
      .then((res) => {
        setanimeInfo(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <Slider animeArr={animeInfo}></Slider>
      <div className="grid grid-flow-col grid-3">
        <div className="col-span-2">
          <CatCard
            title="Adventure"
            animeArr={animeInfo}
            catBy="adventure"
          ></CatCard>
          <CatCard title="Action" animeArr={animeInfo} catBy="action"></CatCard>
          <CatCard
            title="Romance"
            animeArr={animeInfo}
            catBy="romance"
          ></CatCard>
        </div>
        <div>
          <VertCard animeArr={animeInfo}></VertCard>
        </div>
      </div>
    </Layout>
  );
}
