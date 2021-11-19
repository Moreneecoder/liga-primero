import PropTypes from 'prop-types';

const filters = ['General', 'Top Half', 'Bottom Half', 'Ucl Spot', 'Europa League Spot', 'Relegation zone'];

const TableFilter = (props) => {
  const { handleChange } = props;
  let idx = 0;

  return (
    <select name="filters" onChange={(e) => handleChange(e.target.value)}>
      {filters.map((item) => {
        idx += 1;
        return (<option value={item} key={idx}>{item}</option>);
      })}
    </select>
  );
};

TableFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default TableFilter;
