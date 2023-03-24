import { API } from '@/lib/API'
import User from '@/lib/models/User'

class UserService {
    private readonly endpoint = {
        users: '/users',
        singleUser: (id: number) => `/users/${id}`,
    }

    private mapUsers = (usersArr: any[]) => usersArr.map((user: any) => new User(user))
    private mapUser = (userData: any) => new User(userData)

    async fetchUsers() {
        const { data: usersArr } = await API.get(this.endpoint.users)
        return this.mapUsers(usersArr)
    }

    async fetchUser(id: number) {
        const { data: userData } = await API.get(this.endpoint.singleUser(id))
        return this.mapUser(userData)
    }
}

export const userService = new UserService()
