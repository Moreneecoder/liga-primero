import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
// import useHttp from '../hooks/http';
import '../stylesheets/Team.css';
import cancelImg from '../images/cancel.svg';

const Team = () => {
  const location = useLocation();
  const { id } = location.state;

  const leagueTable = useSelector((state) => state.standings);

  // useHttp('https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=140', []);

  if (leagueTable[0]) {
    const standings = leagueTable[0].league.standings[0];
    const team = standings[id - 1];
    return (
      <div className="Team pt-5">
        <div className="teamCard card main-bg-color col-11 col-md-7 col-lg-5 p-3 mx-auto text-center">
          <div className="image text-center">
            <img className="team-logo" src={team.team.logo} alt="team-logo" />
          </div>
          <h4>{team.team.name}</h4>
          <div className="team-form d-flex mx-auto">
            <div className="bg-success px-1 mx-1 rounded">W</div>
            <div className="bg-success px-1 mx-1 rounded">W</div>
            <div className="bg-danger px-2 mx-1 rounded">L</div>
            <div className="bg-success px-1 mx-1 rounded">W</div>
            <div className="bg-secondary px-1 mx-1 rounded">D</div>
          </div>

          <div className="row">
            <div className="offset-2 col-4">
              <div className="stand-data fw-bolder heading bg-light py-1 mt-2">Position</div>
              <div className="stand-data fw-bolder bg-success text-white py-1">{team.rank}</div>
            </div>

            <div className="col-4">
              <div className="fw-bolder bg-success text-white py-1 mt-2">Points</div>
              <div className="fw-bolder heading bg-light py-1">35</div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-4 mb-2">
              <div className="heading bg-light py-1">Played</div>
              <div className="bg-success text-white py-1">{team.all.played}</div>
            </div>

            <div className="col-4 mb-2">
              <div className="bg-success text-white py-1">Win</div>
              <div className="heading bg-light py-1">{team.all.win}</div>
            </div>

            <div className="col-4 mb-2">
              <div className="heading bg-light py-1">Draw</div>
              <div className="bg-success text-white py-1">{team.all.draw}</div>
            </div>

            <div className="col-4 mb-2">
              <div className="heading bg-light py-1">Loss</div>
              <div className="bg-success text-white py-1">{team.all.lose}</div>
            </div>

            <div className="col-4 mb-2">
              <div className="bg-success text-white py-1">Scored</div>
              <div className="heading bg-light py-1">{team.all.goals.for}</div>
            </div>

            <div className="col-4 mb-2">
              <div className="heading bg-light py-1">Concede</div>
              <div className="bg-success text-white py-1">{team.all.goals.against}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Team px-1 px-md-0 col-12 col-md-6 mx-auto my-auto text-center">
      <img className="mb-3" style={{ width: '50%' }} src={cancelImg} alt="not-found" />
      <div className="alert alert-danger p-2">Could not fetch data! Please go back to standings to select a team.</div>
      <Link to="/" className="text-white btn btn-md btn-md-lg main-bg-color">&#8592; Go Back To standings</Link>
    </div>
  );
};

export default Team;
