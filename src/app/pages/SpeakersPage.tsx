import { use } from 'react';

import { fetchSpeakers } from '@/lib/services/fetchSpeaker';

import Title from '@/components/Title';

function SpeakersPage() {
  const speakers = use(fetchSpeakers());

  return (
    <>
      <Title>Speakers</Title>
      SpeakersList
    </>
  );
}

export default SpeakersPage;