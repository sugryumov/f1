import { FC } from 'react';
import { Table } from 'antd';
import { IStandingsInformation, TStandingsType } from '@/models/IStandings';
import { StandingsTypes } from '@/enums/standingsTypes';
import { columnsConstractor, columnsDrivers } from './columns';
import './index.css';

interface StandingsTableProps {
  data: IStandingsInformation[];
  isFetching: boolean;
  standingsType: TStandingsType;
}

export const StandingsTable: FC<StandingsTableProps> = ({
  data,
  isFetching,
  standingsType,
}) => {
  const columns =
    standingsType === StandingsTypes.DRIVERS
      ? columnsDrivers
      : columnsConstractor;

  const dataSource = !isFetching ? data : [];

  return (
    <div className="standings__table-wrapper">
      <Table
        loading={isFetching}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        className="standings__table"
        rowClassName={(_, idx) => (idx % 2 !== 0 ? 'standings__row-light' : '')}
      />
    </div>
  );
};
