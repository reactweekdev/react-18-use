import { use } from 'react';

import { speakerService } from '@/lib/services/speakerService';
import Title from '@/components/Title';

import SpeakersList from './SpeakersList';

function SpeakersPage() {
	const speakers = use(speakerService.fetchSpeakers());

	return (
		<>
			<Title>React Speakers</Title>
			<SpeakersList speakers={speakers} />
		</>
	);
}

export default SpeakersPage;
