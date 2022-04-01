import { FC } from 'react';
import { Skeleton } from 'antd';
import './index.css';

interface StandingsTitleProps {
  season: string;
  title: string;
  isFetching: boolean;
}

export const StandingsTitle: FC<StandingsTitleProps> = ({
  season,
  title,
  isFetching,
}) => {
  const titleWithSpaces = title
    ?.split('')
    .map(el => (el === el.toUpperCase() ? ` ${el}` : el))
    .join('');

  return (
    <Skeleton
      active
      paragraph={false}
      loading={isFetching}
      className="standings__skeleton"
    >
      <h1 className="standings__title">{`${season} ${titleWithSpaces}`}</h1>
    </Skeleton>
  );
};
