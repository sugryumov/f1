import { FC } from 'react';
import { Result, Layout } from 'antd';
import { useGetStandingsQuery } from '@/services/standingsService';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { StandingsTitle } from './components/StandingsTitle';
import { StandingsSelect } from './components/StandingsSelect';
import { StandingsTable } from './components/StandingsTable';
import './index.css';

export const Standings: FC = () => {
  const { standingsParams } = useTypedSelector(state => state.standingsReducer);

  const { data, error, isFetching } = useGetStandingsQuery({
    ...standingsParams,
  });

  const { season, title, information } = data || {};

  return (
    <Layout.Content className="container">
      <div className="standings__container">
        {error && <Result status="error">{error}</Result>}

        <div className="standings__control">
          <StandingsSelect type="season" />
          <StandingsSelect type="standings" />
        </div>

        <StandingsTitle season={season} title={title} isFetching={isFetching} />

        <StandingsTable
          data={information}
          isFetching={isFetching}
          standingsType={standingsParams.standings}
        />
      </div>
    </Layout.Content>
  );
};
