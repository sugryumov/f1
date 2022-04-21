import { StandingsTypes } from '@/enums/standingsTypes';

export const options = {
  season: [
    { value: '2022', name: '2022' },
    { value: '2021', name: '2021' },
    { value: '2020', name: '2020' },
    { value: '2019', name: '2019' },
    { value: '2018', name: '2018' },
    { value: '2017', name: '2017' },
    { value: '2016', name: '2016' },
    { value: '2015', name: '2015' },
    { value: '2014', name: '2014' },
    { value: '2013', name: '2013' },
    { value: '2012', name: '2012' },
    { value: '2011', name: '2011' },
    { value: '2010', name: '2010' },
    { value: '2009', name: '2009' },
    { value: '2008', name: '2008' },
    { value: '2007', name: '2007' },
    { value: '2006', name: '2006' },
    { value: '2005', name: '2005' },
    { value: '2004', name: '2004' },
    { value: '2003', name: '2003' },
    { value: '2002', name: '2002' },
    { value: '2001', name: '2001' },
    { value: '2000', name: '2000' },
  ],
  standings: [
    { value: StandingsTypes.DRIVERS, name: 'Drivers' },
    { value: StandingsTypes.CONSTRUCTORS, name: 'Constructors' },
  ],
};
