import { IUser } from '@/models/IUser';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: builder => ({
    fetchAuth: builder.mutation<any, any>({
      query: params => ({
        url: 'posts',
        method: 'POST',
        body: params,
      }),
      transformResponse: (response: IUser) => {
        const findUser =
          response.username === 'user' && response.password === '123';

        if (findUser) {
          const token = 'sgk7bk8ejm14mls4';
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(response));

          return {
            token,
            user: response,
          };
        } else {
          return 'Incorrect username or password';
        }
      },
    }),
  }),
});

export const { useFetchAuthMutation } = authApi;
