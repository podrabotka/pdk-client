import { roleThunks } from "@/entities/Role";
import { userThunks } from "@/entities/User";

export const allActions = {
	...userThunks,
	...roleThunks,
};
