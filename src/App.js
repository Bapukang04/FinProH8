import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import Details from './pages/Details';
import Header from './components/Header';
import Footer from './components/Footer';
import { getListFilm } from './redux/actions/Actions';
import './styles/index.css';
 

const App = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  // const param_query = 'movie,series,episode'

  useEffect(() => {
    dispatch(getListFilm('movie,episode,series'));
  }, [dispatch]);

  const handleSearch = (query) => {
    dispatch(getListFilm(query));
 };

  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearch} />  
        <main>
        <h3 style={{color:"blue"}}>Show Your Favorite Movie</h3>
          <Routes>
            <Route path="/" element={<Home movies={movies} loading={loading} error={error} />} />
            <Route path="/movie/:id" element={<Details />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
