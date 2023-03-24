import { Speaker } from "@/lib/services/speakerService"

type Props = {
    speakers: Speaker[] | any[]
}

const SpeakersList = ({ speakers }: Props) => (
    <section>
        {speakers.map((user) => (
            <p key={user.id}>{`${user.name} (${user.lecture})`}</p>
        ))}
    </section>
)

export default SpeakersList
