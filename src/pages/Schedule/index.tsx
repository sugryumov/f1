import { FC } from 'react';
import { Layout, Result } from 'antd';
import { useGetScheduleQuery } from '@/services/scheduleService';
import { RaceStatuses } from '@/enums/raceStatuses';
import { Title } from '@/components/Title';
import { MONTH } from '@/common/constants/month';
import SVGIcon from '@/common/SVGIcon';
import './index.css';

export const Schedule: FC = () => {
  const { data, error, isFetching } = useGetScheduleQuery({});

  const renderContent = () =>
    data?.map((race, idx) => {
      const { key, round, status, Date: dateRace, FirstPractice } = race;

      let styled = 'schedule__item';

      if (status === RaceStatuses.NEXT) {
        styled += idx % 3 === 1 ? ' schedule__item-8' : ' schedule__item-12';
      }

      const [, startMonth, startDate] = FirstPractice.Date.split('-');
      const [, endMonth, endDate] = dateRace.split('-');

      const monthText =
        startMonth === endMonth
          ? MONTH[endMonth]
          : `${MONTH[startMonth]}-${MONTH[endMonth]}`;

      return (
        <div key={key} className={styled}>
          <span className="schedule__item-round">{`ROUND ${round}`}</span>
          <div className="schedule__item-header">
            <div className="schedule__item-header-date">
              <p className="schedule__item-header-days">
                {`${startDate} - ${endDate}`}
              </p>

              <p className="schedule__item-header-month">{monthText}</p>
            </div>

            <div className="schedule__item-info-flag">
              <SVGIcon name={key} />
            </div>

            {/* <p className="schedule__item-header-pos">{position}</p>
            <div className="schedule__item-header-wrap">
              <p className="schedule__item-header-pts">{points}</p>
              <p className="schedule__item-header-meta">PTS</p>
            </div> */}
          </div>
          {/* <p>{RaceName}</p>
          <p>{status}</p> */}

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
