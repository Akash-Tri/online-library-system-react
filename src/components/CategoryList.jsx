import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'History', 'Fantasy', 'Romance'];

const CategoryList = () => {
  return (
    <div className="category-list">
      {categories.map((cat) => (
        <Link key={cat} to={`/books/${cat}`} className="btn" style={{ marginRight: '1rem' }}>
          {cat}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
