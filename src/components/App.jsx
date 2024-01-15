import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home/Home.js';
import Movies from 'pages/Movie/Movies.js';
import MoviesDetails from 'pages/MoviesDetails/MoviesDetails.js';

import SharedLayout from './SharedLayout/SharedLayout';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moviedId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};