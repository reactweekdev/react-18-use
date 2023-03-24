import { use } from 'react'

import Title from '@/components/Title'
import { speakerService, Speaker } from '@/lib/services/speakerService'

export function SpeakersPage() {
    const speakers = use(speakerService.fetchSpeakers())

    console.log(speakers)
    return (
        <>
            <Title>Speakers</Title>
            <section>
                {speakers.map((speaker) => (
                    <p key={speaker.id}>
                        {speaker.name} ({speaker.lecture})
                    </p>
                ))}
            </section>
        </>
    )
}
