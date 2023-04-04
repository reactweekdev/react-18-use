import axios from 'axios';
import { load } from 'cheerio';

import { CODESTANTINE_URL } from '@/config/constants';

export type Speaker = {
  id: string;
  name: string;
  lecture: string;
};

class SpeakerService {
  async fetchSpeakers(): Promise<Speaker[]> {
    try {
      // Go to the dev.to tags page
      const response = await axios.get(CODESTANTINE_URL);

      // Get the HTML code of the webpage
      const html = await response.data;
      const $ = load(html);

      // Find all elements with crayons-tag class, find their innerText and add them to the tags array
      const speakersTopicsArr = $('h3.elementor-heading-title')
        .map(function () {
          return $(this).text();
        })
        .get();

      const speakers: Speaker[] = [];
      for (let index = 0; index < speakersTopicsArr.length; index++) {
        const elem = speakersTopicsArr[index];

        let speaker: any = {};
        const isName = index % 2 === 0;

        if (isName || index === 0) {
          speaker.id = index;
          speaker.name = elem;
          speakers[index] = speaker;
        } else {
          speaker = speakers[index - 1];
          speaker.lecture = elem;
        }
      }

      return speakers.filter((speaker) => !!speaker);
    } catch (error) {
      throw error;
    }
  }
}

export const speakerService = new SpeakerService();
