import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Standings = (props) => {
  console.log(props);
  const { books } = props;
  return (
    <div className="Standings">
      <h1 style={{ color: 'red' }}>{books[1].title}</h1>
    </div>
  );
};

Standings.defaultProps = {
  books: 'I no see am',
};

Standings.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })),
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const StandingsContainer = connect(mapStateToProps)(Standings);

export default StandingsContainer;
