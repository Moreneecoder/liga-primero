import { Link } from 'react-router-dom';
import '../stylesheets/Fixtures.css';
import goalie from '../images/goalie.svg';

const Fixtures = () => (
  <div className="Fixtures px-1 px-md-0 col-12 col-md-6 mx-auto text-center">
    <img className="mb-3" style={{ width: '50%' }} src={goalie} alt="not-found" />
    <div className="alert alert-info p-2">In the Pipes! Coming Soon...</div>
    <Link to="/" className="text-white btn btn-md btn-md-lg main-bg-color">&#8592; Go Back To standings</Link>
  </div>
);

export default Fixtures;
