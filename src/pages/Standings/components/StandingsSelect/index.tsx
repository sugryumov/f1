import { FC } from 'react';
import { Select } from 'antd';
import { TStandingsKey } from '@/models/IStandings';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { options } from './options';
import './index.css';

interface StandingsSelectProps {
  type: TStandingsKey;
}

export const StandingsSelect: FC<StandingsSelectProps> = ({ type }) => {
  const { setStandingsParams } = useActions();
  const { standingsParams } = useTypedSelector(state => state.standingsReducer);

  const handlerSelect = (type: string) => (value: string) => {
    setStandingsParams({
      value,
      type,
    });
  };

  return (
    <div className="standings-select">
      <p className="standings-select__title">{type}</p>
      <Select
        size="large"
        className="standings-select__select"
        value={standingsParams[type]}
        onChange={handlerSelect(type)}
      >
        {options[type].map(({ name, value }) => (
          <Select.Option key={value} value={value}>
            {name}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};
