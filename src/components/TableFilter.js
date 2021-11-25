import PropTypes from 'prop-types';

const filters = ['General', 'Top Half', 'Bottom Half', 'Ucl Spot', 'Europa League Spot', 'Relegation zone'];

const TableFilter = (props) => {
  const { handleChange } = props;
  let idx = 0;

  return (
    <div className="col-12 mb-3 px-md-0 d-flex align-items-baseline">
      <p style={{ fontSize: '0.8em' }} className="me-3 main-bg-color py-1 px-2">Filter: </p>
      <select style={{ fontSize: '0.8em' }} className="form-control" name="filters" onChange={(e) => handleChange(e.target.value)}>
        {filters.map((item) => {
          idx += 1;
          return (<option value={item} key={idx}>{item}</option>);
        })}
      </select>
    </div>
  );
};

TableFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default TableFilter;
