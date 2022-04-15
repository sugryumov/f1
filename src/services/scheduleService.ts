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

        const [_, fistLavel] = elements;
        const [secondLevel] = fistLavel.elements;
        const raceList = secondLevel.elements;

        const data = raceList.map(elements => {
          const {
            attributes: { round },
            elements: raceInfo,
          } = elements;

          const collection = raceInfo.reduce((acc, el) => {
            const name = el.name;

            if (name === 'Circuit') {
              return { ...acc, key: el.attributes.circuitId };
            }

            if (name.includes('Practice') || name === 'Qualifying') {
              const practices = el.elements.reduce((acc, practice) => {
                const [text] = practice.elements;

                return {
                  ...acc,
                  [practice.name]: text.text,
                };
              }, {});

              return {
                ...acc,
                [el.name]: {
                  ...practices,
                },
              };
            }

            const [text] = el.elements;

            return {
              ...acc,
              [name]: text.text,
            };
          }, {});

          return {
            round,
            ...collection,
          };
        });

        return data;
      },
    }),
  }),
});

export const { useGetScheduleQuery } = scheduleApi;
