import { use } from 'react';

import { fetchUsers } from '@/lib/services/fetchUsers';
import Title from '@/components/Title';

import UsersList from '../users/UserList';

function UsersPage() {
  const users = use(fetchUsers());

  return (
    <>
      <Title>React Users</Title>
      <UsersList users={users} />
    </>
  );
}

export default UsersPage;
