import Instance from '@/network/instance';

class ergastAPI extends Instance {
  constructor(baseURL: string, timeout = 15000) {
    super(baseURL, timeout);
  }

  async getStandings({ year }) {
    return (await this.send('get', `${year}/driverStandings`)).parseXML();
  }
}

const baseUrl = 'http://ergast.com/api/f1/';

const network = new ergastAPI(baseUrl);

export default network;
