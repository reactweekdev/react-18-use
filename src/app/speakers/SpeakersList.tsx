import { Speaker } from '@/lib/services/speakerService';

type Props = {
  speakers: Speaker[];
};

const SpeakersList = ({ speakers }: Props) => (
  <section>
    {speakers.map((speaker: Speaker) => (
      <p key={speaker.id}>{`${speaker.name} (${speaker.lecture})`}</p>
    ))}
  </section>
);

export default SpeakersList;
