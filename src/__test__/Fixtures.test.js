import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Fixtures from '../components/Fixtures';

describe('Fixtures Component', () => {
  test('Renders Fixtures component as expected', () => {
    const tree = renderer.create(<BrowserRouter>
        <Fixtures />
      </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
