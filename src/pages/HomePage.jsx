
import CategoryList from '../components/CategoryList.jsx';
import BookCard from '../components/BookCard.jsx';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const books = useSelector((state) => state.books.books);
  const popularBooks = books.slice(0, 3); // Dummy popular books

  return (
    <div className="container">
      <h1>Welcome to the Online Library 📖</h1>

      <h2>Book Categories</h2>
      <CategoryList />

      <h2 style={{ marginTop: '2rem' }}>Popular Books</h2>
      {popularBooks.length === 0 ? (
        <p>No popular books available.</p>
      ) : (
        popularBooks.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
};

export default HomePage;
