import { FC, Fragment } from 'react';
import { Layout, Result } from 'antd';
import { StandingsTypes } from '@/enums/standingsTypes';
import { useGetStandingsQuery } from '@/services/standingsService';
import { Title } from '@/components/Title';
import { DriversSkileton } from './components/DriversSkileton';
import { DriversItem } from './components/DriversItem';
import './index.css';

export const Drivers: FC = () => {
  const { data, error, isFetching } = useGetStandingsQuery({
    season: 'current',
    standings: StandingsTypes.DRIVERS,
  });

  return (
    <Layout.Content className="container">
      <div className="drivers__container">
        {error && <Result status="error">{error}</Result>}

        <Title loading={isFetching} text="F1 Drivers 2022" />

        {isFetching ? (
          <DriversSkileton />
        ) : (
          <div className="drivers__list">
            {data?.information?.map((driver, idx) => (
              <Fragment key={driver?.key}>
                <DriversItem idx={idx} driver={driver} />
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </Layout.Content>
  );
};
