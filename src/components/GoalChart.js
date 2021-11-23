import { Link } from 'react-router-dom';
import '../stylesheets/GoalChart.css';
import goalie from '../images/goalie.svg';

const GoalChart = () => (
  <div className="GoalChart px-1 px-md-0 col-12 col-md-6 mx-auto text-center">
    <img className="mb-3" style={{ width: '50%' }} src={goalie} alt="not-found" />
    <div className="alert alert-info p-2">
      <span className="fw-bolder">Goal Chart</span>
      {' '}
      Feature Coming Soon! In the Pipes...
    </div>
    <Link to="/" className="text-white btn btn-md btn-md-lg main-bg-color">&#8592; Go Back To standings</Link>
  </div>
);

export default GoalChart;
