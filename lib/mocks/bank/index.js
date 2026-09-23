import { ukGeography } from './uk-geography';
import { ukHistory } from './uk-history';
import { ukMovements } from './uk-movements';
import { ukPolityAdministration } from './uk-polity-administration';
import { ukEconomyDevelopment } from './uk-economy-development';
import { indianPolityBank } from './indian-polity';
import { ukSocietyCulture } from './uk-society-culture';
import { ukEnvironmentResources } from './uk-environment-resources';
import { ukSchemesDevelopment } from './uk-schemes-development';
import { ukMiscGK } from './uk-misc-gk';
import { historyBank } from './history';

function hash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

// Add new question files here. IDs derive from subject + question text, so history stays valid when files are reordered.
const sources = [ukGeography, ukHistory, ukMovements, ukPolityAdministration, ukEconomyDevelopment, indianPolityBank, ukSocietyCulture, ukEnvironmentResources, ukSchemesDevelopment, ukMiscGK, historyBank];

export const bank = sources.flat().map(q => ({ ...q, id: hash(`${q.subject}|${q.q}`) }));
