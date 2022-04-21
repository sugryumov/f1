import { RaceStatuses } from '@/enums/raceStatuses';

export const prepareDataRace = races => {
  const dateNow = new Date();
  let closest: any = Infinity;

  return races?.map(race => {
    const dateRace = new Date(race.Date);

    if (dateNow > dateRace) {
      return {
        ...race,
        status: RaceStatuses.PASSED,
      };
    }

    if (dateRace >= dateNow && dateRace < closest) {
      closest = dateRace;

      return {
        ...race,
        status: RaceStatuses.NEXT,
      };
    }

    return {
      ...race,
      status: RaceStatuses.FUTURE,
    };
  });
};
