import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoleService } from "../api";
import { IRole } from "./types";

interface IRoleRes {}

export const getRoles = createAsyncThunk<IRole[]>(
	"role",
	async (_, thunkApi) => {
		try {
			const data = await RoleService.getAll();
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
