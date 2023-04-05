import { use } from 'react';

import { fetchSpeakers } from '@/lib/services/fetchSpeakers';

import SpeakersList from '@/app/speakers/SpeakersList';
import Title from '@/components/Title';

function SpeakersPage() {
  const speakers = use(fetchSpeakers());

  return (
    <>
      <Title>Speakers</Title>
      <SpeakersList speakers={speakers}/>
    </>
  );
}

export default SpeakersPage;