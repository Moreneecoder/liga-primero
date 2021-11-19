import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import useHttp from '../hooks/http';
import TableFilter from '../components/TableFilter';
import { filterTable } from '../actions';
import getStandingsByFilter from '../logic/filterFuncs';

const Standings = () => {
  const leagueTable = useSelector((state) => state.standings);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // useHttp('https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=140', []);

  const handleFilterChange = (filter) => {
    dispatch(filterTable(filter));
  };

  if (leagueTable[0]) {
    const standings = leagueTable[0].league.standings[0];
    const filteredData = () => (filter === 'General' ? standings : getStandingsByFilter(standings, filter));

    return (
      <div className="Standings">
        <h1>LA LIGA</h1>
        <TableFilter handleChange={handleFilterChange} />

        {filteredData().map((item) => {
          const { rank } = item;

          return (
            <div key={rank} style={{ backgroundColor: 'maroon' }}>
              <Link
                style={{ color: 'red' }}
                index={rank}
                to="/team"
                state={{ id: rank }}
              >
                {rank}
                .
                {' '}
                {item.team.name}
              </Link>
              {' '}
              <span>
                P:
                {item.all.played}
              </span>
              {' '}
              <span>
                W:
                {item.all.win}
              </span>
              {' '}
              <span>
                D:
                {item.all.draw}
              </span>
              {' '}
              <span>
                L:
                {item.all.lose}
              </span>
              {' '}
              <span>
                GF:
                {item.all.goals.for}
              </span>
              {' '}
              <span>
                GA:
                {item.all.goals.against}
              </span>
              {' '}
              <span>
                PTS:
                {item.points}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  return null;
};

export default Standings;
