import { useState } from "react";
import Layout from "./Layout";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [searchedValue, setSearchedValue] = useState<string>();
  return (
    <Layout>
      <div className="flex justify-center align-middle mt-[20%] outline-none ">
        <div>
          <input
            type="search"
            name="search"
            id=""
            className="rounded-l-lg w-[50rem] h-12 text-gray-800 pl-4 text-xl"
            onChange={(e) => {
              setSearchedValue(e.target.value);
            }}
          />
        </div>
        <button
          className="px-3 bg-red-400 rounded-r-lg"
          onClick={() =>
            router.push({
              pathname: "./Search/[value]",
              query: { value: searchedValue },
            })
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
}
