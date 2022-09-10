import { createAsyncThunk } from '@reduxjs/toolkit';
<<<<<<< HEAD

const FETCH_DATA = './financial_Stock/data/FETCH_DATA';
const INITIAL_DATA = [];

=======

const FETCH_DATA = './financial_Stock/data/FETCH_DATA';
const INITIAL_DATA = ['testing'];

>>>>>>> ed2917d78aa2a66841f2380c05bdf3df05428cb6
export const CategoriesAction = (payload) => (
  {
    type: FETCH_DATA,
    payload,
  }
);

<<<<<<< HEAD
=======
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

>>>>>>> ed2917d78aa2a66841f2380c05bdf3df05428cb6
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
<<<<<<< HEAD
      currentPrice: data.current_price,
      totalVolume: data.total_volume,
      high24h: data.high_24h,
      low24h: data.low_24h,
      priceChange24h: data.price_change_24h,
      marketCapChange24h: data.market_cap_change_24h,
      totalSupply: data.total_supply,
      atlChangePercentage: data.atl_change_percentage,
      lastUpdated: data.last_updated,
=======
      total_volume: data.total_volume,
>>>>>>> ed2917d78aa2a66841f2380c05bdf3df05428cb6
    }));
    return fetchCategoriesData;
  },
);

export default function categoriesReducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case `${FETCH_DATA}/fulfilled`:
<<<<<<< HEAD
      return action.payload;
=======
      return [...action.payload];
>>>>>>> ed2917d78aa2a66841f2380c05bdf3df05428cb6
    default:
      return state;
  }
}
