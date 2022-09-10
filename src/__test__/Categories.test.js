import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Categories from '../components/Categories';

const CategoriesProvider = () => (
  <Provider store={store}>
    <Categories />
  </Provider>
);

describe('renders the Categories data', () => {
  it('renders properly', () => {
    const component = renderer.create(<CategoriesProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
