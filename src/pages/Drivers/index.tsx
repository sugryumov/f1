import { FC } from 'react';
import { Layout, Result } from 'antd';
import { StandingsTypes } from '@/enums/standingsTypes';
import { TEAM_COLORS, DRIVER_NUMBERS } from '@/common/constants';
import { useGetStandingsQuery } from '@/services/standingsService';
import SVGIcon from '@/common/SVGIcon';
import './index.css';

export const Drivers: FC = () => {
  const { data, error, isFetching } = useGetStandingsQuery({
    season: 'current',
    standings: StandingsTypes.DRIVERS,
  });

  const { information } = data || {};

  const renderContent = information?.map((driver, idx) => {
    const { position, points, Driver, Constructor } = driver;

    const driverId = driver.key;
    const constructorName = Constructor.Name.replace(/\s/g, '');

    return (
      <div
        key={driverId}
        className={
          idx >= 3 ? 'drivers__item drivers__item-grid' : 'drivers__item'
        }
      >
        <div className="drivers__item-header">
          <p className="drivers__item-header-pos">{position}</p>
          <div className="drivers__item-header-wrap">
            <span className="drivers__item-header-pts">{points}</span>
            <span className="drivers__item-header-meta">PTS</span>
          </div>
        </div>

        <div className="drivers__item-info">
          <div className="drivers__item-info-wrap">
            <span
              style={{
                backgroundColor: TEAM_COLORS[constructorName] || 'crimson',
              }}
              className="drivers__item-info-team"
            ></span>
            <p className="drivers__item-info-given">{Driver.GivenName}</p>
            <p className="drivers__item-info-family">{Driver.FamilyName}</p>
          </div>

          <div className="drivers__item-info-flag">
            <SVGIcon name={Driver.Nationality} />
          </div>
        </div>

        <div className="drivers__item-main">
          <p className="drivers__item-main-team">{Constructor.Name}</p>

          <div className="drivers__item-main-inner">
            <p className="drivers__item-main-number">
              {DRIVER_NUMBERS[driverId]}
            </p>

            <img
              className="drivers__item-main-img"
              alt={driverId}
              src={`../drivers/${driverId}.png`}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <Layout.Content className="container">
      <div className="drivers__container">
        {error && <Result status="error">{error}</Result>}

        <div className="drivers__list">{renderContent}</div>
      </div>
    </Layout.Content>
  );
};
