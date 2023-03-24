import { use } from "react";

import Title from "@/components/Title";

import { Speaker, speakerService } from "../../lib/services/speakerService";

function SpeakersPage() {
  const speakers = use(speakerService.fetchSpeakers());

  return (
    <>
      <Title>Speakers</Title>
      <section>
        {(speakers as Speaker[]).filter(speaker => !!speaker.name).map((speaker) => (
          <p key={speaker.id}>{speaker.name} ({speaker.lecture})</p>
        ))}
      </section>
    </>
  );
}

export default SpeakersPage;
