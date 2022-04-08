import { FC } from 'react';
import SVGIcon from '@/common/SVGIcon';
import { DRIVER_NUMBERS, TEAM_COLORS } from '@/common/constants';
import './index.css';

export const DriversItem: FC<any> = ({ driver, idx }) => {
  const { position, points, Driver, Constructor, key } = driver;

  const constructorName = Constructor.Name.replace(/\s/g, '');

  return (
    <div
      className={
        idx >= 3 ? 'drivers__item drivers__item-grid' : 'drivers__item'
      }
    >
      <div className="drivers__item-header">
        <p className="drivers__item-header-pos">{position}</p>
        <div className="drivers__item-header-wrap">
          <p className="drivers__item-header-pts">{points}</p>
          <p className="drivers__item-header-meta">PTS</p>
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
          <p className="drivers__item-main-number">{DRIVER_NUMBERS[key]}</p>

          <img
            className="drivers__item-main-img"
            alt={key}
            src={`/assets/drivers/${key}.png`}
          />
        </div>
      </div>
    </div>
  );
};
