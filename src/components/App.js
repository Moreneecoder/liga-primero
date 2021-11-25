import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Standings from '../containers/Standings';
import Team from '../containers/Team';
import Fixtures from './Fixtures';
import GoalChart from './GoalChart';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Standings />} />
        <Route path="/team/:teamname" element={<Team />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/goalchart" element={<GoalChart />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
