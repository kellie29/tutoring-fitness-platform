// @flow

import appData from '../data';

type OccupationOption = $ReadOnly<{|
  value: string,
  label: string,
|}>;

export default appData.occupations.map<OccupationOption>((occupation) => ({
  value: occupation.id,
  label: occupation.name,
}));
