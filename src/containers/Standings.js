import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import refreshTable from '../actions';

const Standings = () => {
  const stated = useSelector((state) => state);
  console.log(stated);
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

    console.log('Shitty Effects');
  }, []);

  if (leagueTable[0]) {
    return (
      <div className="Standings">
        { console.log(leagueTable) }
        <h1>LA LIGA</h1>
        {leagueTable[0].league.standings[0].map((item) => {
          const { rank } = item;
          return (<li key={rank} style={{ color: 'red' }}>{item.team.name}</li>);
        })}
      </div>
    );
  }

  return null;
};

export default Standings;
