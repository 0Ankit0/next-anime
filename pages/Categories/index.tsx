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
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Layout>
      <div className="grid grid-flow-col grid-3">
        <div className="col-span-2">
          <CatCard
            title="Adventure"
            animeArr={animeInfo}
            catBy="adventure"
            maxCards={3}
          ></CatCard>
          <CatCard title="Action" animeArr={animeInfo} catBy="action"></CatCard>
          <CatCard
            title="Romance"
            animeArr={animeInfo}
            catBy="romance"
            maxCards={3}
          ></CatCard>
        </div>
        <div>
          <VertCard animeArr={animeInfo}></VertCard>
        </div>
      </div>
    </Layout>
  );
}

export default index;
