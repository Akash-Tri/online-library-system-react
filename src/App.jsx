
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BrowseBooksPage from './pages/BrowseBooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/React-Assignment-02/" element={<HomePage />} />
        <Route path="/books/:category" element={<BrowseBooksPage />} />
        <Route path="/books/:category/:bookId" element={<BookDetailsPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/edit-book/:bookId" element={<EditBookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
