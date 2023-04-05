import { cache } from 'react';

import { speakerService } from './speakerService';

export const fetchSpeakers = cache(() => speakerService.fetchSpeakers());
