import { useMemo, useState } from "react"
import Fuse from "fuse.js"
import Link from "next/link"

const SearchBar = ({products}) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const fuse = useMemo(()=>
        new Fuse(products, {
          keys: ["title", "category"],
          includeScore: true,
          threshold: 0.3,
          distance: 100,
        })
    );

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        setResults(fuse.search(value));
    };

    return (
      <div className="w-full mx-1">
        <input
          type="text"
          value={query}
          onChange={e => handleChange(e)}
          placeholder="Search Products"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        />
        <ul className="w-full">
          {results.map((result) => (
            <li key={result.item.id}>
              <Link href={`/products/${result.item.id}`}>
                <span className="w-full px-3">{result.item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default SearchBar