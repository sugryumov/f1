import axios, { AxiosInstance } from 'axios';
import convert from 'xml-js';

class Instance {
  instance: AxiosInstance;
  methods: any;
  data: any;

  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    this.methods = new Map([
      ['post', this.instance.post],
      ['get', this.instance.get],
      ['put', this.instance.put],
      ['patch', this.instance.patch],
      ['delete', this.instance.delete],
    ]);
  }

  public async send(methodName: string, ...args: any) {
    try {
      const method = this.methods.get(methodName);
      const { data } = await method(...args);

      this.data = data;

      return this;
    } catch (error) {
      throw new Error(error);
    }
  }

  public parseXML() {
    const result = convert.xml2js(this.data, {
      compact: false,
      ignoreComment: true,
      alwaysChildren: true,
    });

    return result;
  }
}

export default Instance;
