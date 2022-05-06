import { createSlice } from "@reduxjs/toolkit";

const HomePageSlice = createSlice({
	name: "homepage",
	initialState: {
		animeList: [],
	},
	reducers: {
		incrementCounter: (state, action) => {},
	},
});

export const HomePageActions = HomePageSlice.actions;
export default HomePageSlice.reducer;
