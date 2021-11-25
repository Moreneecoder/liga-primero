import standingsReducer from '../reducers/standings';
import filterReducer from '../reducers/filter';

const state = [];
const action = {
  type: 'REFRESH_TABLE',
  latestTable: [
    {
      rank: '1',
      team: 'Barcelona',
      points: 37,
    },
  ],
};

describe('Reducers Tests', () => {
  describe('standingsReducer Tests', () => {
    test('returns the correct updated state', () => {
      expect(standingsReducer(state, action)[0]).toEqual({
        rank: '1',
        team: 'Barcelona',
        points: 37,
      });
    });

    test('returns empty array state when wrong action type is passed', () => {
      action.type = 'SOMETHING_ELSE';
      expect(standingsReducer(state, action)).toEqual([]);
    });
  });

  describe('filterReducer Tests', () => {
    const state = 'General';
    const filterAction = {
      type: 'FILTER_TABLE',
      filter: 'ucl spot',
    };

    test('returns passed in filter and return general if no filter is passed', () => {
      expect(filterReducer(state, filterAction)).toEqual('ucl spot');
    });

    test('expects filter data to be string', () => {
      expect(typeof filterReducer(state, filterAction)).toBe('string');
    });
  });
});
