import Layout from "../Layout";
import CatCard from "../components/CatCard";
import VertCard from "../components/VertCard";
import { useEffect, useState } from "react";
import axios from "axios";

function index() {
  const [animeInfo, setanimeInfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/main")
      .then((res) => {
        setanimeInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Layout>
      <div className="grid grid-flow-col grid-3">
        <div className="col-span-2">
          <CatCard title="Anime List" animeArr={animeInfo}></CatCard>
        </div>
        <div>
          <VertCard animeArr={animeInfo}></VertCard>
        </div>
      </div>
    </Layout>
  );
}

export default index;
