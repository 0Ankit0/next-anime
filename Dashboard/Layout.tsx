import React from "react";
import Aside from "./Aside";
import { useSession, signOut, signIn } from "next-auth/react";

type childrenType = {
  children: React.ReactNode;
};

function Layout({ children }: childrenType) {
  const { data: session } = useSession();
  return (
    <div className="flex h-screen rounded-lg">
      <Aside></Aside>
      <div className=" flex-grow px-16 container">
        <div className=" bg-slate-200 my-4 rounded-xl p-4 ">
          {session ? (
            <p className="flex">
              <img
                src={session?.user?.image}
                alt=""
                className="rounded-full w-16"
              />
              <b className="mt-4 mx-4">{session?.user?.name}</b>
              <button
                className="bg-blue-400 px-2  rounded-lg w-32 text-white font-sans font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </button>
            </p>
          ) : (
            <p>
              <button
                className="bg-blue-400 py-2 rounded-lg w-32  text-white font-sans font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("Google");
                }}
              >
                Sign In
              </button>
            </p>
          )}
        </div>

        {children}
      </div>
    </div>
  );
}

export default Layout;
