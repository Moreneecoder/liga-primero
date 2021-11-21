import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../stylesheets/Standings.css';
import useHttp from '../hooks/http';
import TableFilter from '../components/TableFilter';
import { filterTable } from '../actions';
import getStandingsByFilter from '../logic/filterFuncs';

const Standings = () => {
  const leagueTable = useSelector((state) => state.standings);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useHttp('https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=140', []);

  const handleFilterChange = (filter) => {
    dispatch(filterTable(filter));
  };

  if (leagueTable[0]) {
    const standings = leagueTable[0].league.standings[0];
    const filteredData = () => (filter === 'General' ? standings : getStandingsByFilter(standings, filter));

    return (
      <div className="Standings mx-1 mx-md-5">
        <h1>LA LIGA</h1>
        <div className="alert alert-success">Click on a team&apos;s name to get more info about them.</div>
        <TableFilter handleChange={handleFilterChange} />

        <div className="standRow standHeading justify-content-between">
          <div className="leftData d-flex">
            <div className="rank" />
            <div className="image" />
            <div
              className="team-name heading text-center fw-bolder"
            >
              Team
            </div>
          </div>

          <div className="middleData d-flex d-md-none text-center">
            <div className="stand-data fw-bolder heading">P</div>
            <div className="stand-data fw-bolder heading">W</div>
            <div className="stand-data fw-bolder heading">D</div>
            <div className="stand-data fw-bolder heading">L</div>
            <div className="stand-data fw-bolder heading">GF</div>
            <div className="stand-data fw-bolder heading">GA</div>
          </div>

          <div className="middleData d-none d-md-flex text-center">
            <div className="stand-data fw-bolder heading">Played</div>
            <div className="stand-data fw-bolder heading">Win</div>
            <div className="stand-data fw-bolder heading">Draw</div>
            <div className="stand-data fw-bolder heading">Loss</div>
            <div className="stand-data fw-bolder heading">GF</div>
            <div className="stand-data fw-bolder heading">GA</div>
          </div>

          <div className="rightData d-flex d-md-none text-center">
            <div className="stand-data fw-bolder heading">GD</div>
            <div className="stand-data fw-bolder heading">Pts</div>
          </div>

          <div className="rightData d-none d-md-flex text-center">
            <div className="stand-data fw-bolder heading">GoalsDiff</div>
            <div className="stand-data fw-bolder heading">Points</div>
          </div>
        </div>

        {filteredData().map((item) => {
          const { rank } = item;

          return (

            <div key={rank} className="standRow standBody justify-content-between">

              <div className="leftData d-flex">
                <div className="rank">
                  {rank}
                  .
                </div>
                <div className="image text-center">
                  <img className="team-logo" src={item.team.logo} alt="team-logo" />
                </div>
                <Link
                  className="team-name text-center fw-bolder"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                  index={rank}
                  to="/team"
                  state={{ id: rank }}
                >
                  {item.team.name}
                </Link>
              </div>

              <div className="middleData d-flex text-center">
                <div className="stand-data">{item.all.played}</div>
                <div className="stand-data">{item.all.win}</div>
                <div className="stand-data">{item.all.draw}</div>
                <div className="stand-data">{item.all.lose}</div>
                <div className="stand-data">{item.all.goals.for}</div>
                <div className="stand-data">{item.all.goals.against}</div>
              </div>

              <div className="rightData d-flex text-center">
                <div className="stand-data">{item.goalsDiff}</div>
                <div className="stand-data fw-bolder">{item.points}</div>
              </div>
            </div>

          );
        })}
      </div>
    );
  }

  return (
    <div className="Standings mx-md-5">
      <div className="standRow justify-content-between">

        <div className="leftData d-flex">
          <div className="rank" />
          <div className="image" />
          <div
            className="team-name text-center fw-bolder"
          >
            Team
          </div>
        </div>

        <div className="middleData d-flex d-md-none text-center">
          <div className="stand-data fw-bolder">P</div>
          <div className="stand-data fw-bolder">W</div>
          <div className="stand-data fw-bolder">D</div>
          <div className="stand-data fw-bolder">L</div>
          <div className="stand-data fw-bolder">GF</div>
          <div className="stand-data fw-bolder">GA</div>
        </div>

        <div className="middleData d-none d-md-flex text-center">
          <div className="stand-data fw-bolder">Played</div>
          <div className="stand-data fw-bolder">Win</div>
          <div className="stand-data fw-bolder">Draw</div>
          <div className="stand-data fw-bolder">Lose</div>
          <div className="stand-data fw-bolder">GF</div>
          <div className="stand-data fw-bolder">GA</div>
        </div>

        <div className="rightData d-flex d-md-none text-center">
          <div className="stand-data fw-bolder">GD</div>
          <div className="stand-data fw-bolder">Pts</div>
        </div>

        <div className="rightData d-none d-md-flex text-center">
          <div className="stand-data fw-bolder">GoalsDiff</div>
          <div className="stand-data fw-bolder">Points</div>
        </div>
      </div>

      <div className="standRow justify-content-between">

        <div className="leftData d-flex">
          <div className="rank">17.</div>
          <div className="image text-center">
            <img className="team-logo" src="https://media.api-sports.io/football/teams/529.png" alt="team-logo" />
          </div>
          <Link
            className="team-name text-center fw-bolder"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
            index="1"
            to="/team"
          >
            Barcelona
          </Link>
        </div>

        <div className="middleData d-flex text-center">
          <div className="stand-data">17</div>
          <div className="stand-data">10</div>
          <div className="stand-data">5</div>
          <div className="stand-data">2</div>
          <div className="stand-data">21</div>
          <div className="stand-data">14</div>
        </div>

        <div className="rightData d-flex text-center">
          <div className="stand-data">7</div>
          <div className="stand-data fw-bolder">35</div>
        </div>
      </div>
    </div>
  );
};

export default Standings;
