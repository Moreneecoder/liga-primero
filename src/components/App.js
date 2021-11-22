import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../stylesheets/App.css';
import Navbar from './Navbar';
import Standings from '../containers/Standings';
import Team from '../containers/Team';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Standings />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
