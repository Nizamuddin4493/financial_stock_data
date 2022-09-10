import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_DATA = './financial_Stock/data/FETCH_DATA';
const INITIAL_DATA = [];

export const CategoriesAction = (payload) => (
  {
    type: FETCH_DATA,
    payload,
  }
);

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
      currentPrice: data.current_price,
      totalVolume: data.total_volume,
      high24h: data.high_24h,
      low24h: data.low_24h,
      priceChange24h: data.price_change_24h,
      marketCapChange24h: data.market_cap_change_24h,
      totalSupply: data.total_supply,
      atlChangePercentage: data.atl_change_percentage,
      lastUpdated: data.last_updated,
    }));
    return fetchCategoriesData;
  },
);

export default function categoriesReducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case `${FETCH_DATA}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}
