import PropTypes from 'prop-types';

const filters = ['General', 'Top Half', 'Bottom Half', 'Ucl Spot', 'Europa League Spot', 'Relegation zone'];

const TableFilter = (props) => {
  const { handleChange } = props;
  let idx = 0;

  return (
    <div className="col-12 offset-md-3 col-md-6 mb-3 px-3 px-md-0 d-flex align-items-baseline">
      <h5 className="me-3 main-bg-color py-2 px-3">Filter: </h5>
      <select className="form-control fw-bolder" name="filters" onChange={(e) => handleChange(e.target.value)}>
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
