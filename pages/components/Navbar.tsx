import { useRouter } from "next/router";
import Link from "next/link";

function Navbar() {
  const Links = [
    { label: "Homepage", path: "/Main" },
    { label: "Categories", path: "/Categories" },
    { label: "Anime-List", path: "/AnimeList" },
  ];
  const router = useRouter();
  const { pathname } = router;
  const inactiveLink = "p-4 ";
  const activeLink = inactiveLink + "bg-red-400";
  return (
    <>
      <nav className="flex items-center justify-around bg-[#070720] container">
        <div>Logo</div>
        <ul className="flex gap-4 py-3">
          {Links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className={
                  pathname.includes(link.path) ? activeLink : inactiveLink
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <ul className="flex gap-4">
            <Link href={"./Login-form"}>
              <li className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            </Link>
            <li className="cursor-pointer">
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
