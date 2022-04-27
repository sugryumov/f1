import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { xml2js } from 'xml-js';
import { baseUrl } from '@/common/constants';
import { IStandings, IStandingsParams } from '@/models/IStandings';

export const standingsApi = createApi({
  reducerPath: 'standingsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getStandings: builder.query<IStandings, IStandingsParams>({
      query: ({ season, standings }) => ({
        url: `${season}/${standings}`,
        responseHandler: response => response.text(),
      }),
      transformResponse: (response: string): IStandings => {
        const { elements } = xml2js(response, {
          compact: false,
          ignoreComment: true,
          alwaysChildren: true,
        });

        const [_, fistLevel] = elements;
        const [secondLevel] = fistLevel.elements;
        const [thirdLevel] = secondLevel.elements;

        const season = thirdLevel.attributes.season;
        const driversList = thirdLevel.elements;
        let title: string;
        let key: string;

        const information = driversList.map(
          ({ attributes, elements, name }) => {
            const { position, points } = attributes;
            title = name;

            const collection = elements.reduce((acc, el, idx) => {
              const innerTest = el.elements.reduce((innerAcc, innerEl) => {
                const innerName = innerEl.name;
                const [text] = innerEl.elements;

                return {
                  ...innerAcc,
                  [innerName]: text.text,
                };
              }, {});

              if (idx === 0) {
                key = el.attributes[`${el.name.toLowerCase()}Id`];
              }

              return {
                ...acc,
                key,
                [el.name]: innerTest,
              };
            }, {});

            return {
              position,
              points,
              ...collection,
            };
          },
        );

        return {
          season,
          title,
          information,
        };
      },
    }),
  }),
});

export const { useGetStandingsQuery } = standingsApi;
