import { combineReducers } from "@reduxjs/toolkit";
import { reducer as toastReducer } from "react-redux-toastr";

import { roleReducer } from "@/entities/Role";
import { userReducer } from "@/entities/User";

export const rootReducer = combineReducers({
	user: userReducer,
	role: roleReducer,
	toastr: toastReducer,
});
