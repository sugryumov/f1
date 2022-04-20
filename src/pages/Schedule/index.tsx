import { FC } from 'react';
import { Layout, Result } from 'antd';
import { useGetScheduleQuery } from '@/services/scheduleService';
import { RaceStatuses } from '@/enums/raceStatuses';
import { Title } from '@/components/Title';
import './index.css';

export const Schedule: FC = () => {
  const { data, error, isFetching } = useGetScheduleQuery({});

  console.log('data', data);

  const renderContent = () =>
    data?.map(({ key, status, RaceName }, idx: number) => {
      let styled = 'schedule__item';

      if (status === RaceStatuses.NEXT) {
        styled += idx % 3 === 1 ? ' schedule__item-8' : ' schedule__item-12';
      }

      return (
        <div key={key} className={styled}>
          <p>{RaceName}</p>
          <p>{status}</p>

          <div className="schedule__item-inner">
            <img
              className="schedule__item-img"
              alt={key}
              src={`/assets/circuits/${key}.png`}
            />
          </div>
        </div>
      );
    });

  return (
    <Layout.Content className="container">
      <div className="schedule__container">
        {error && <Result status="error">{error}</Result>}

        <Title loading={isFetching} text="F1 Schedule 2022" />

        <div className="schedule__list">{renderContent()}</div>
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
