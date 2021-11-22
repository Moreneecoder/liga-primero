import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../stylesheets/Standings.css';
// import useHttp from '../hooks/http';
import TableFilter from '../components/TableFilter';
import { filterTable } from '../actions';
import getStandingsByFilter from '../logic/filterFuncs';
import cancelImg from '../images/cancel.svg';

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
    <div className="Standings px-1 px-md-0 col-12 col-md-6 mx-auto my-auto text-center">
      <img className="mb-3" style={{ width: '50%' }} src={cancelImg} alt="not-found" />
      <div className="alert alert-danger p-2">Could not fetch standings! Please refresh or check your internet connection..</div>
      <button type="button" onClick={() => window.location.reload()} className="text-white btn btn-md btn-md-lg main-bg-color">&#8635; Refresh Page</button>
    </div>
  );
};

export default Standings;
