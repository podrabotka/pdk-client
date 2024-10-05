export { ROLE_NAME } from './constants';
export type { IRole } from './model/types';

export { roleReducer } from './model/reducer';
export * as roleThunks from './model/thunks';
export { selectDefaultRoles } from './model/selectors';
