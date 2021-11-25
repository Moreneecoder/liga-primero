const filterReducer = (state = 'General', action) => {
  let output;

  switch (action.type) {
    case 'FILTER_TABLE':
      output = action.filter;
      break;
    default:
      output = state;
  }
  return output;
};

export default filterReducer;
