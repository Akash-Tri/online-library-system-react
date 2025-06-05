import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

const BrowseBooksPage = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter((book) =>
    book.category === category &&
    (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container">
      <h2>{category} Books</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredBooks.length === 0 ? (
        <p>No books found for this category.</p>
      ) : (
        filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
};

export default BrowseBooksPage;
