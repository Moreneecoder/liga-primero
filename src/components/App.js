import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Standings from '../containers/Standings';
import Team from '../containers/Team';

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
