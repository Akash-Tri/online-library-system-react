
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
