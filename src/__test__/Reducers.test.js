import standingsReducer from "../reducers/standings";

const state = [];
const action = {
  type: 'REFRESH_TABLE',
  latestTable: [
    {
        rank: '1',
        team: 'Barcelona',
        points: 37,
    }
  ]
}

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

});