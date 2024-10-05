import { axiosClassic } from "@/shared/api";
import { getRoleUrl } from "@/shared/config/api.config";
import { IRole } from "../model/types";

export const RoleService = {
	async getAll() {
		const { data } = await axiosClassic.get<IRole[]>(getRoleUrl(""));
		return data;
	},
};
