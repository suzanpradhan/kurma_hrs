import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiPaths, setHeaders } from './apiConstants';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiPaths.baseUrl,
    prepareHeaders: async (headers) => {
      await setHeaders(headers);
      return headers;
    },
  }),
  tagTypes: [
    'Roles',
    'Permissions',
    'UserPermissions',
    'ContentTypes',
    'Users',
    'Profiles',
  ],
  endpoints: () => ({

  }),
});


