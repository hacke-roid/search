import { useState } from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import "./components/SearchBar.css";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const results = await searchImages(term);
    console.log(results);
    setImages(results);
  };

  return (
    <div className="back-ground">
      <SearchBar onSubmit={handleSubmit}/>
      <h2 style={{ marginLeft : '30px' }}>Image List</h2>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
