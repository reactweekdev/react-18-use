import { cache } from 'react';

import { userService } from './userService';

export const fetchUsers = cache(() => userService.fetchUsers());