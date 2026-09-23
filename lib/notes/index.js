import { uttarakhandHistory } from './uk-history';
import { uttarakhandMovements } from './uk-movements';
import { uttarakhandPolityAdministration } from './uk-polity-administration';
import { uttarakhandEconomyDevelopment } from './uk-economy-development';
import { uttarakhandSocietyCulture } from './uk-society-culture';
import { uttarakhandEnvironmentResources } from './uk-environment-resources';
import { uttarakhandSchemesDevelopment } from './uk-schemes-development';
import { uttarakhandMiscGK } from './uk-misc-gk';

export const ukNotes = {
  history: { label: 'Uttarakhand History', topics: uttarakhandHistory },
  movements: { label: 'Uttarakhand Movements', topics: uttarakhandMovements },
  'polity-administration': { label: 'Uttarakhand Polity & Administration', topics: uttarakhandPolityAdministration },
  'economy-development': { label: 'Uttarakhand Economy & Development', topics: uttarakhandEconomyDevelopment },
  'society-culture': { label: 'Uttarakhand Society & Culture', topics: uttarakhandSocietyCulture },
  'environment-resources': { label: 'Uttarakhand Environment & Natural Resources', topics: uttarakhandEnvironmentResources },
  'schemes-development': { label: 'Uttarakhand Schemes & Development', topics: uttarakhandSchemesDevelopment },
  'misc-gk': { label: 'Uttarakhand Miscellaneous GK', topics: uttarakhandMiscGK }
};
