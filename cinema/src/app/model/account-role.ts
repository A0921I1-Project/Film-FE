import {Role} from './role';

export interface AccountRole {
  id: number;
  account_id: Account;
  role_id: Role;
}
