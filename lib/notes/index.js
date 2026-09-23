import { uttarakhandHistory } from './uk-history';
import { uttarakhandMovements } from './uk-movements';
import { uttarakhandPolityAdministration } from './uk-polity-administration';
import { uttarakhandEconomyDevelopment } from './uk-economy-development';
import { uttarakhandSocietyCulture } from './uk-society-culture';

export const ukNotes = {
  history: { label: 'Uttarakhand History', topics: uttarakhandHistory },
  movements: { label: 'Uttarakhand Movements', topics: uttarakhandMovements },
  'polity-administration': { label: 'Uttarakhand Polity & Administration', topics: uttarakhandPolityAdministration },
  'economy-development': { label: 'Uttarakhand Economy & Development', topics: uttarakhandEconomyDevelopment },
  'society-culture': { label: 'Uttarakhand Society & Culture', topics: uttarakhandSocietyCulture }
};
