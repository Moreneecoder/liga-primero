import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import GoalChart from '../components/GoalChart';

describe('GoalChart Component', () => {
  test('Renders GoalChart component as expected', () => {
    const tree = renderer.create(<BrowserRouter>
      <GoalChart />
    </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
