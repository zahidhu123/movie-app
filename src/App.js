import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import { Route, Routes } from 'react-router';
import TopRated from './component/top-rated/topRated';
import NewRelease from './component/new-release/newRelease';
import Latest from './component/latest/latest';
import HighRated from './component/high-rated/highRated';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} >
          <Route path="/top-rated" element={<TopRated />} /> 
          <Route path="/new-release" element={<NewRelease />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/high-rated" element={<HighRated />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
