import User from '@/lib/models/User'

type Props = {
    users: User[]
}

const UsersList = ({ users }: Props) => (
    <section>
        {users.map((user) => (
            <p key={user.id}>{user.name}</p>
        ))}
    </section>
)

export default UsersList