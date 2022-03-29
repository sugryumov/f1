import { FC } from 'react';
import { Skeleton, Result } from 'antd';
import { useGetStandingsQuery } from '@/services/standingsService';
import './index.css';

export const Standings: FC = () => {
  const { data, error, isLoading } = useGetStandingsQuery(2022);

  const renderStandings = data?.map(({ elements, attributes }) => {
    const drivers = elements[0].elements;

    const { position, points } = attributes;

    return (
      <div key={position} className="standings__item">
        {position}
        {drivers.map(({ name, elements }) => {
          if (name === 'FamilyName' || name === 'GivenName') {
            const driverName = elements[0].text;

            return <p key={driverName}>{driverName}</p>;
          }
        })}
        {points}
      </div>
    );
  });

  return (
    <div>
      <Skeleton loading={isLoading} active />
      {error && <Result status="error">{error}</Result>}
      {renderStandings}
    </div>
  );
};
