import { FC, useEffect, useState } from 'react';
import network from '@/network';
import './index.css';

export const Standings: FC = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchStandings = network.getStandings({ year: 2022 });

    fetchStandings.then((res: any) =>
      setData(res.elements[1].elements[0].elements[0].elements),
    );
  }, []);

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

  return <div>{renderStandings}</div>;
};
