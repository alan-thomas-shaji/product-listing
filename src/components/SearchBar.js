import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";

const SearchBar = ({ products }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [toggle, setToggle] = useState(true);

  const fuse = useMemo(
    () =>
      new Fuse(products, {
        keys: ["title", "category"],
        includeScore: true,
        threshold: 0.3,
        distance: 100,
      }),
    [products]
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setResults(fuse.search(value));
    setToggle(true)
  };
  const hideResults = () => {
    setResults([]);
  };

  return (
    <div className="w-full flex">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={handleChange}
        onBlur={() => {
          setTimeout(() => {
            setToggle(false);
          }, 250);
        }}
        placeholder="Search Products"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
      />
      {results.length > 0 && (
        <ul
          className={`absolute bg-white border border-gray-300 rounded-md py-2 mt-10 w-fit z-10 ${
            toggle ? "block" : "hidden"
          }`}
        >
          {results.map((result) => (
            <li key={result.item.id}>
              <Link href={`/products/${result.item.id}`} onClick={hideResults}>
                <div className="block px-3 py-2 hover:bg-gray-100">
                  {result.item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
