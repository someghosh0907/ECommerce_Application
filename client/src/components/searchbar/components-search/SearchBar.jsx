import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({}) => {
  const [input, setInput] = useState("");
  const [anss,setAnss]=useState([])
  const [result,setResult]= useState([])

  const fetchData = async(value) => {
    const ans1= await fetch("http://localhost:3400/api/v1/product/all-products")
    const ans2=ans1.json()
    setAnss(ans2)
        const results = anss.filter((user) => {
          return (
            value &&
            user &&
            user.title &&
            user.brand &&
            user.category &&
            user.description &&
            user.title.toLowerCase().includes(value)
          );
        });
        setResult(results);

  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
