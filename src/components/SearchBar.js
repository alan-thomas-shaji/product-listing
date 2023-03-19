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
      <div className="w-full">
        <input
          type="text"
          value={query}
          onChange={e => handleChange(e)}
          placeholder="Search Products"
          className="w-full"
        />
        <ul className="w-full">
          {results.map((result) => (
            <li key={result.item.id}>
              <Link href={`/products/${result.item.id}`}>
                <span>{result.item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default SearchBar