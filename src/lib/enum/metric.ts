import { PlayType } from './play-type';

export interface Metric {
  getKey: () => string;
  getName: () => string;
  getPropertyName: () => string;
  getUnit: () => string | undefined;
  getPopulationDataProperty: () => string | undefined;
  getPlayTypes: () => PlayType[];
  isSubscriptionRequired: () => boolean;
}
