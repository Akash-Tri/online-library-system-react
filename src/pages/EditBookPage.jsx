import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editBook } from '../features/books/booksSlice';

const EditBookPage = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === bookId)
  );

  const [formData, setFormData] = useState({
    id: '',
    title: '',
    author: '',
    description: '',
    category: '',
    rating: '',
    image: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (book) {
      setFormData(book);
    }
  }, [book]);

  const validate = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(editBook(formData));
      navigate(`/books/${formData.category}`);
    }
  };

  if (!book) return <p className="container">Book not found.</p>;

  return (
    <div className="container">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input name="title" value={formData.title} onChange={handleChange} />
        {errors.title && <span className="error">{errors.title}</span>}

        <label>Author</label>
        <input name="author" value={formData.author} onChange={handleChange} />
        {errors.author && <span className="error">{errors.author}</span>}

        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        {errors.description && <span className="error">{errors.description}</span>}

        <label>Category</label>
        <input name="category" value={formData.category} onChange={handleChange} />
        {errors.category && <span className="error">{errors.category}</span>}

        <label>Rating</label>
        <input name="rating" value={formData.rating} onChange={handleChange} />
        {errors.rating && <span className="error">{errors.rating}</span>}

        <label>Image URL</label>
        <input name="image" value={formData.image} onChange={handleChange} />
        {errors.image && <span className="error">{errors.image}</span>}

        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBookPage;
