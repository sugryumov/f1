import { createSlice } from '@reduxjs/toolkit';
import { StandingsTypes } from '@/enums/standingsTypes';
import { IStandingsParams } from '@/models/IStandings';

export interface StandingsState {
  standingsParams: IStandingsParams;
}

const initialState: StandingsState = {
  standingsParams: {
    standings: StandingsTypes.DRIVERS,
    season: '2022',
  },
};

const standingsSlice = createSlice({
  name: 'standings',
  initialState,
  reducers: {
    setStandingsParams(state, { payload }) {
      state.standingsParams[payload.type] = payload.value;
    },
  },
});

export const standingsActions = standingsSlice.actions;
export default standingsSlice.reducer;
