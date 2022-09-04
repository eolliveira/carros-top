import "bootstrap/js/src/collapse.js";
import "./style.css";

const SearchBar = () => {
  return (
    <div className="base-card search-container">
      <div className="search">
        <input
          className="search-input"
          placeholder="  Digite sua buscar"
          type="text"
        />

        <div className="search-btn">
          <p>BUSCAR</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
