import { use } from 'react'

import { userService } from '@/lib/services/userService'
import Title from '@/components/Title'

import UsersList from './SpeakersList'

function SpeakersPage() {
    const speakers = use(userService.fetchUsers())

    return (
        <>
            <Title>React Speakers</Title>
            <UsersList speakers={speakers} />
        </>
    )
}

export default SpeakersPage
