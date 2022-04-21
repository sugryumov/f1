type TPractice = {
  Date: string;
  Time: string;
};

export interface IScheduleData {
  Date: string;
  FirstPractice: TPractice;
  RaceName: string;
  Qualifying: TPractice;
  SecondPractice: TPractice;
  ThirdPractice: TPractice;
  Time: string;
  key: string;
  round: string;
  status: string;
}
