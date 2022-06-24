import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MONTH } from '@/common/constants/month';
import { RaceStatuses } from '@/enums/raceStatuses';
import { CIRCUIT_COUNTRIES } from '@/common/constants/circuits';
import SVGIcon from '@/common/SVGIcon';
import './index.css';

export const RaceItem: FC<any> = ({ race, idx }) => {
  const { key, round, status, Date: dateRace, FirstPractice, RaceName } = race;

  const nextRace = status === RaceStatuses.NEXT;
  const passedRace = status === RaceStatuses.PASSED;

  let styled = 'schedule__item';

  if (nextRace) {
    styled += idx % 3 === 1 ? ' schedule__item-8' : ' schedule__item-12';
  }

  if (passedRace) {
    styled += ' schedule__item-hover';
  }

  const [, startMonth, startDate] = FirstPractice.Date.split('-');
  const [, endMonth, endDate] = dateRace.split('-');

  const monthText =
    startMonth === endMonth
      ? MONTH[endMonth]
      : `${MONTH[startMonth]}—${MONTH[endMonth]}`;

  return (
    <div key={key} className={styled}>
      <span className="schedule__item-round">
        {nextRace ? `NEXT ROUND ${round}` : `ROUND ${round}`}
      </span>
      <div className="schedule__item-header">
        <div className="schedule__item-header-date">
          <p className="schedule__item-header-days">
            {`${startDate}—${endDate}`}
          </p>

          <p className="caption">{monthText}</p>
        </div>

        <div className="small-flag">
          <SVGIcon name={key} />
        </div>
      </div>

      <div className="schedule__item-info">
        {passedRace ? (
          <Link
            to="#"
            className="schedule__item-info-title schedule__item-info-link"
          >
            {CIRCUIT_COUNTRIES[key]}
          </Link>
        ) : (
          <p className="schedule__item-info-title">{CIRCUIT_COUNTRIES[key]}</p>
        )}
        <p className="schedule__item-info-name">Formula 1 {RaceName} 2022</p>
      </div>

      <div className="schedule__item-main">
        <img
          className="schedule__item-main-img"
          alt={key}
          src={`/assets/circuits/${key}.png`}
        />
      </div>
    </div>
  );
};
