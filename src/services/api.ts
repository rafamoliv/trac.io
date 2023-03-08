import {
  createApi,
  fetchBaseQuery,
  FetchArgs
} from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-json-server.typicode.com/tractian/fake-api/',
    prepareHeaders(headers) {
      return headers
    }
  }),
  endpoints(builder) {
    return {
      fetchAssets: builder.query({
        query: (): FetchArgs => ({
          url: `/assets`
        })
      }),
      fetchAssetsById: builder.query({
        query: (id): FetchArgs => ({
          url: `/assets/${id}`
        })
      }),
      fetchUsers: builder.query({
        query: (): FetchArgs => ({
          url: `/users`
        })
      }),
      fetchUsersById: builder.query({
        query: (id): FetchArgs => ({
          url: `/users/${id}`
        })
      }),
      fetchUnits: builder.query({
        query: (): FetchArgs => ({
          url: `/units`
        })
      }),
      fetchUnitsById: builder.query({
        query: (id): FetchArgs => ({
          url: `/units/${id}`
        })
      }),
      fetchCompanies: builder.query({
        query: (): FetchArgs => ({
          url: `/companies`
        })
      }),
      fetchCompaniesById: builder.query({
        query: (id): FetchArgs => ({
          url: `/companies/${id}`
        })
      }),
      fetchWorkorders: builder.query({
        query: (): FetchArgs => ({
          url: `/workorders`
        })
      }),
      fetchWorkordersById: builder.query({
        query: (id): FetchArgs => ({
          url: `/workorders/${id}`
        })
      })
    }
  }
})

export const {
  useFetchAssetsQuery,
  useFetchAssetsByIdQuery,
  useFetchUsersQuery,
  useFetchUsersByIdQuery,
  useFetchUnitsQuery,
  useFetchUnitsByIdQuery,
  useFetchCompaniesQuery,
  useFetchCompaniesByIdQuery,
  useFetchWorkordersQuery,
  useFetchWorkordersByIdQuery
} = api
