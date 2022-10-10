import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import { Route, Routes } from 'react-router';
import NewRelease from './component/new-release/newRelease';
import Latest from './component/latest/latest';
import HighRated from './component/high-rated/highRated';
import TrendingMovies from './component/trending-movies/trendingMovies';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} >
          <Route path="/trending-movies" element={<TrendingMovies />} /> 
          <Route path="/new-release" element={<NewRelease />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/high-rated" element={<HighRated />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
