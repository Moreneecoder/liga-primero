import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StandingsContainer from '../containers/Standings';
import Team from './Team';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<StandingsContainer />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;