const FETCH_DATA = './financial_Stock/data/FETCH_DATA';
const INITIAL_DATA = [];

export const CategoriesAction = () => (
  {
    type: FETCH_DATA,
  }
);

export default function categoriesReducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case FETCH_DATA:
      return 'something';
    default:
      return state;
  }
}
