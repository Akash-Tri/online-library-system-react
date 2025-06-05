
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by title or author..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '0.8rem',
        width: '100%',
        marginBottom: '1.5rem',
        border: '1px solid #ccc',
        borderRadius: '5px'
      }}
    />
  );
};

export default SearchBar;
