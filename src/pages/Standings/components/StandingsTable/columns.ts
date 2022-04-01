export const columnsDrivers = [
  {
    title: 'POS',
    dataIndex: 'position',
    key: 'position',
    width: '10%',
  },
  {
    title: 'DRIVER',
    dataIndex: 'Driver',
    render: ({ GivenName, FamilyName }) => `${GivenName} ${FamilyName}`,
    width: '30%',
  },
  {
    title: 'NATIONALITY',
    dataIndex: 'Driver',
    render: ({ Nationality }) => Nationality,
    width: '25%',
  },
  {
    title: 'TEAM',
    dataIndex: 'Constructor',
    render: ({ Name }) => Name,
    width: '25%',
  },

  {
    title: 'PTS',
    dataIndex: 'points',
    key: 'points',
    width: '10%',
  },
];

export const columnsConstractor = [
  {
    title: 'POS',
    dataIndex: 'position',
    key: 'position',
    width: '10%',
  },
  {
    title: 'TEAM',
    dataIndex: 'Constructor',
    render: ({ Name }) => Name,
    width: '80%',
  },

  {
    title: 'PTS',
    dataIndex: 'points',
    key: 'points',
    width: '10%',
  },
];
