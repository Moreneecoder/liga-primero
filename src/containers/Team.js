import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import useHttp from '../hooks/http';

const Team = () => {
  const location = useLocation();
  const { id } = location.state;
  // console.log(location.state);
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

  return null;
};

export default Team;
