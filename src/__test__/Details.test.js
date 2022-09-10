import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Details from '../components/Details';

const DetailsProvider = () => (
  <Provider store={store}>
    <Details />
  </Provider>
);

describe('renders properly the Details page', () => {
  it('renders correctly', () => {
    const component = renderer.create(<DetailsProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
