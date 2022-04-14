import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { xml2js } from 'xml-js';
import { baseUrl } from '@/common/constants';

export const scheduleApi = createApi({
  reducerPath: 'scheduleApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getSchedule: builder.query<any, any>({
      query: () => ({
        url: '/current',
        responseHandler: response => response.text(),
      }),
      transformResponse: async (response: string): Promise<any> => {
        const { elements } = xml2js(response, {
          compact: false,
          ignoreComment: true,
          alwaysChildren: true,
        });

        console.log('elements', elements);
      },
    }),
  }),
});

export const { useGetScheduleQuery } = scheduleApi;
