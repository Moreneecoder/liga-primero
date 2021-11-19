const standingsReducer = (state = [], action) => {
  let output;
  console.log(action);
  switch (action.type) {
    case 'REFRESH_TABLE':
      output = action.latestTable;
      break;
    default:
      output = state;
  }
  console.log(output);
  return output;
};

export default standingsReducer;
