import { use } from 'react'

import { userService } from '@/lib/services/userService'
import Title from '@/components/Title'

import UsersList from './UserList'

function UsersPage() {
    const users = use(userService.fetchUsers())

    return (
        <>
            <Title>React Users</Title>
            <UsersList users={users} />
        </>
    )
}

export default UsersPage
