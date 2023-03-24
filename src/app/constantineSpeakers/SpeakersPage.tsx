import { use } from 'react'

import { speakerService } from '@/lib/services/speakerService'

import Title from '@/components/Title'
import UsersList from './SpeakersList'


function SpeakersPage() {
    const speakers = use(speakerService.fetchSpeakers())

    return (
        <>
            <Title>React Speakers</Title>
            <UsersList speakers={speakers} />
        </>
    )
}

export default SpeakersPage