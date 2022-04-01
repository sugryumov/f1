import { StandingsTypes } from '@/enums/standingsTypes';

type TDriver = {
  DateOfBirth: string;
  FamilyName: string;
  GivenName: string;
  Nationality: string;
  PermanentNumber: string;
};

type TConstructor = {
  Name: string;
  Nationality: string;
};

export interface IStandingsInformation {
  key: string;
  points: string;
  position: string;
  Driver?: TDriver;
  Constructor?: TConstructor;
}

export interface IStandings {
  season: string;
  title: string;
  information: IStandingsInformation[];
}

export type TStandingsType =
  | StandingsTypes.CONSTRUCTORS
  | StandingsTypes.DRIVERS;

export type TStandingsKey = 'season' | 'standings';

export interface IStandingsParams {
  season: string;
  standings: TStandingsType;
}
