const filterByTopHalf = (data) => data.slice(0, 10);
const filterByBottomHalf = (data) => data.slice(10, 20);
const filterByUclSpot = (data) => data.slice(0, 4);
const filterByEuropaSpot = (data) => data.slice(4, 8);
const filterByRelegation = (data) => data.slice(17, 20);

const getStandingsByFilter = (table, filter) => {
  let output;

  switch (filter) {
    case 'Top Half':
      output = filterByTopHalf(table);
      break;
    case 'Bottom Half':
      output = filterByBottomHalf(table);
      break;

    case 'Ucl Spot':
      output = filterByUclSpot(table);
      break;

    case 'Europa League Spot':
      output = filterByEuropaSpot(table);
      break;

    case 'Relegation zone':
      output = filterByRelegation(table);
      break;

    default:
      output = table;
  }

  return output;
};

// books.filter((book) => book.category === filter)

export default getStandingsByFilter;
