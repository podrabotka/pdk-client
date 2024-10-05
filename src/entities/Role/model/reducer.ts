import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";
import { getRoles } from "./thunks";

const roleSlice = createSlice({
	name: "role",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			//getRoles
			.addCase(getRoles.fulfilled, (state, { payload }) => {
				state.roles = payload;
			})
			.addCase(getRoles.rejected, state => {
				state.roles = [];
			});
	},
});

export const { reducer: roleReducer } = roleSlice;
