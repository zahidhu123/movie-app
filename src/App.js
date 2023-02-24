import './App.css';
import Home from './pages/home/home';
import { Route, Routes } from 'react-router';
import Latest from './component/latest/latest';
import HighRated from './component/high-rated/highRated';
import PopularMovies from './component/popular-movies/polularMovies';
import Discovery from './component/discovery/discovery';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} >
          <Route path="/popular-movies" element={<PopularMovies />} /> 
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/high-rated" element={<HighRated />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
