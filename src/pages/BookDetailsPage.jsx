import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === bookId)
  );

  if (!book) {
    return <p className="container">Book not found.</p>;
  }

  return (
    <div className="container">
      <img src={book.image} alt={book.title} style={{ width: '100%', maxWidth: '300px' }} />
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>

      <button onClick={() => navigate(-1)}>⬅ Back to Browse</button>
    </div>
  );
};

export default BookDetailsPage;
