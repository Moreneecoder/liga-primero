import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NavBar from '../components/NavBar';
import Standings from './Standings';
import Team from './Team';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Standings />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
