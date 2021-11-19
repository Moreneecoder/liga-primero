import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { refreshTable } from '../actions';

const Team = () => {
  const location = useLocation();
  const { id } = location.state;
  // console.log(location.state);
  const leagueTable = useSelector((state) => state.standings);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=140', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': 'ac39b316e0msh7d2b82002789670p10a6e9jsna343b2d68ca3',
      },
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(refreshTable(data.response));
      })
      .catch((err) => {
        console.error(err);
      });

    console.log('Teams Effects');
  }, []);
  console.log(leagueTable);
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
