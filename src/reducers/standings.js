const standingsReducer = (state = [], action) => {
  let output;
  console.log(action);
  switch (action.type) {
    case 'REFRESH_TABLE':
      // output = [
      //   ...state,
      //   action.book,
      // ];
      output = action.latestTable;
      break;
    //   case 'REMOVE_BOOK':
    //     output = state.filter((book) => book.id !== action.book.id);
    //     break;
    default:
      output = state;
  }
  console.log(output);
  return output;
};

export default standingsReducer;
