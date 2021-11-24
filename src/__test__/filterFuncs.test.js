import getStandingsByFilter from '../logic/filterFuncs';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

describe('getStandingsByFilter', () => {
  test('returns indices 0 to 9, when Top Half filter is passed', () => {
    expect(getStandingsByFilter(data, 'Top Half')).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('returns indices 11 to 19, when Bottom Half filter is passed', () => {
    expect(getStandingsByFilter(data, 'Bottom Half')).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });

  test('returns indices 0 to 3, when Ucl Spot filter is passed', () => {
    expect(getStandingsByFilter(data, 'Ucl Spot')).toEqual([1, 2, 3, 4]);
  });

  test('returns indices 4 to 6, when Europa League Spot filter is passed', () => {
    expect(getStandingsByFilter(data, 'Europa League Spot')).toEqual([5, 6, 7]);
  });

  test('returns indices 17 to 18, when Relegation zone filter is passed', () => {
    expect(getStandingsByFilter(data, 'Relegation zone')).toEqual([18, 19, 20]);
  });
});
