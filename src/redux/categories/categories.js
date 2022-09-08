import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_DATA = './financial_Stock/data/FETCH_DATA';
const INITIAL_DATA = ['testing'];

export const CategoriesAction = (payload) => (
  {
    type: FETCH_DATA,
    payload,
  }
);

// export const categoriesThunk = createAsyncThunk(
//   FETCH_DATA,
//   async () => {
//     const res = await fetch('https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=08b1d4086627a53d104fcffc0a8db180');
//     const categories = await res.json();
//     const fetchCategoriesData = categories.map((data) => ({
//       symbol: data.symbol,
//       name: data.name,
//       change: data.change,
//       price: data.price,
//       changesPercentage: data.changesPercentage,
//     }));
//     return fetchCategoriesData;
//   },
// );

export const categoriesThunk = createAsyncThunk(
  FETCH_DATA,
  async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap&per_page=14');
    const categories = await res.json();
    const fetchCategoriesData = categories.map((data) => ({
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      image: data.image,
      total_volume: data.total_volume,
    }));
    return fetchCategoriesData;
  },
);

export default function categoriesReducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case `${FETCH_DATA}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
}
