import { FC } from 'react';
import { useGetScheduleQuery } from '@/services/scheduleService';

export const Schedule: FC = () => {
  const { data, error, isFetching } = useGetScheduleQuery({});

  return <div>Schedule</div>;
};
