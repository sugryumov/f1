import { FC } from 'react';
import { Layout, Result } from 'antd';
import { useGetScheduleQuery } from '@/services/scheduleService';

export const Schedule: FC = () => {
  const { data, error, isFetching } = useGetScheduleQuery({});

  console.log('data', data);

  return (
    <Layout.Content className="container">
      <div className="schedule__container">
        {error && <Result status="error">{error}</Result>}
      </div>
    </Layout.Content>
  );
};
