import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import HomePage from '../components/HomePage';
import Details from '../components/Details';

const HomeProvider = () => (
  <Provider store={store}>
    <Router>
      <HomePage />
    </Router>
  </Provider>
);

const DetailsProvider = () => (
  <Provider store={store}>
    <Router>
      <Details />
    </Router>
  </Provider>
);

describe('UI is rendered properly', () => {
  it('renders the home page', () => {
    const homePage = renderer.create(<HomeProvider />).toTree();
    expect(homePage).toMatchSnapshot();
  });

  it('renders the details page of companies properly', () => {
    const detailsPage = renderer.create(<DetailsProvider />).toTree();
    expect(detailsPage).toMatchSnapshot();
  });
});
