import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={onFormSubmit}>
        <label>Search</label>
        <input value={term} onChange={handleChange} />
        <div>
          <button value={term}>
            <a>Submit</a>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
