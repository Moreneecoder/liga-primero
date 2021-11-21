import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import useHttp from '../hooks/http';
import '../stylesheets/Team.css';

const Team = () => {
  const location = useLocation();
  const { id } = location.state;

  const leagueTable = useSelector((state) => state.standings);

  // useHttp('https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=140', []);

  if (leagueTable[0]) {
    const standings = leagueTable[0].league.standings[0];
    const team = standings[id - 1];
    return (
      <div className="Team">
        <h1>Single Team Page</h1>
        <h2><img src={team.team.logo} alt="team-logo" /></h2>
        <h2>{team.team.name}</h2>
        <ul>
          <li>{team.form}</li>
          <li>{team.all.played}</li>
          <li>{team.all.win}</li>
          <li>{team.all.draw}</li>
          <li>{team.all.lose}</li>
          <li>{team.all.goals.for}</li>
          <li>{team.all.goals.against}</li>
          <li>{team.goalsDiff}</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="Team pt-5">
      <div className="teamCard card main-bg-color col-md-5 p-3 mx-auto text-center">
        <div className="image text-center">
          <img className="team-logo" src="https://media.api-sports.io/football/teams/541.png" alt="team-logo" />
        </div>
        <h4>Real Madrid</h4>
        <div className="team-form d-flex mx-auto">
          <div className="bg-success px-1 mx-1 rounded">W</div>
          <div className="bg-success px-1 mx-1 rounded">W</div>
          <div className="bg-danger px-2 mx-1 rounded">L</div>
          <div className="bg-success px-1 mx-1 rounded">W</div>
          <div className="bg-secondary px-1 mx-1 rounded">D</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
