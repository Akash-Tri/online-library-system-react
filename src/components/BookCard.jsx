
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to={`/books/${book.category}/${book.id}`} className="btn">View Details</Link>
    </div>
  );
};

export default BookCard;
