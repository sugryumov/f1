import { FC } from 'react';
import { Layout, Result } from 'antd';
import { useGetScheduleQuery } from '@/services/scheduleService';
import { Title } from '@/components/Title';
import './index.css';

export const Schedule: FC = () => {
  const { data, error, isFetching } = useGetScheduleQuery({});

  console.log('data', data);

  return (
    <Layout.Content className="container">
      <div className="schedule__container">
        {error && <Result status="error">{error}</Result>}

        <Title loading={isFetching} text="F1 Schedule 2022" />
      </div>
    </Layout.Content>
  );
};
