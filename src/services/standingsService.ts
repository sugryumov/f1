import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { xml2js } from 'xml-js';
import { baseUrl } from '@/common/constants';

export const standingsApi = createApi({
  reducerPath: 'standingsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getStandings: builder.query<any, number>({
      query: year => ({
        url: `${year}/driverStandings`,
        responseHandler: response => response.text(),
      }),
      transformResponse: (response: string) => {
        const parseData = xml2js(response, {
          compact: false,
          ignoreComment: true,
          alwaysChildren: true,
        });

        return parseData.elements[1].elements[0].elements[0].elements;
      },
    }),
  }),
});

export const { useGetStandingsQuery } = standingsApi;
