import { TypeRootState } from '@/app/store';
import { ROLE_NAME } from '@/entities/Role';

export const selectDefaultRoles = (state: TypeRootState) => {
	return state.role.roles.filter(name => ROLE_NAME.APPLICANT || ROLE_NAME.EMPLOYER);
};
