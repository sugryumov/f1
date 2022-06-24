import { FC, Fragment } from 'react';
import { Layout, Result } from 'antd';
import { useGetScheduleQuery } from '@/services/scheduleService';
import { Title } from '@/components/Title';
import { SkeletonGrid } from '@/components/SkeletonGrid';
import { RaceItem } from './components/RaceItem';
import './index.css';

export const Schedule: FC = () => {
  const { data, error, isFetching } = useGetScheduleQuery({});

  return (
    <Layout.Content className="container">
      <div className="schedule__container">
        {error && <Result status="error">{error}</Result>}

        <Title loading={isFetching} text="F1 Schedule 2022" />

        <div className="schedule__list">
          {data?.map((race, idx) => (
            <Fragment key={race?.key}>
              <RaceItem idx={idx} race={race} />
            </Fragment>
          ))}
        </div>
      </div>
    </Layout.Content>
  );
};

// Schedule page
// Get current Schedule http://ergast.com/api/f1/current

// On click open page with results
// Race result http://ergast.com/api/f1/2022/1/driverStandings
// or http://ergast.com/api/f1/2022/1/results

// Qualifications result http://ergast.com/api/f1/{{year}}/{{round}}/qualifying

// Pit stops http://ergast.com/api/f1/{{year}}/{{round}}/pitstops
