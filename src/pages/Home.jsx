import React from 'react';
import List from '../components/List';

const Home = ({ movies, loading, error }) => {
  return (
    <div className="container mt-4">
      {loading && <div className="text-center"><p>Loading...</p></div>}
      {error && <div className="text-center"><p>Error: {error}</p></div>}
      <div className="row">
        <List movies={movies} />
      </div>
    </div>
  );
};

export default Home;
