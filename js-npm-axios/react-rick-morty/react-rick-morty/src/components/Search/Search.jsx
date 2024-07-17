import "./Search.css"

const Search = ({ setSearch, setPageNumber, handleSearch }) => {
    let searchBtn = (e) => {
      e.preventDefault();
      setPageNumber(1)
    };
    return (
        <form className="search" onSubmit={handleSearch}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for characters"
          className="search-input"
          type="text"
        />
       <button type="submit" className="search-button">   
        Search
       </button>
      </form>
    );
  };
  
  export default Search;