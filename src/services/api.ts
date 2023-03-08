import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
        query: () => ({
          url: `/assets`
        })
      }),
      fetchAssetsById: builder.query({
        query: (id) => ({
          url: `/assets/${id}`
        })
      }),
      fetchUsers: builder.query({
        query: () => ({
          url: `/users`
        })
      }),
      fetchUsersById: builder.query({
        query: (id) => ({
          url: `/users/${id}`
        })
      }),
      fetchUnits: builder.query({
        query: () => ({
          url: `/units`
        })
      }),
      fetchUnitsById: builder.query({
        query: (id) => ({
          url: `/units/${id}`
        })
      }),
      fetchCompanies: builder.query({
        query: () => ({
          url: `/companies`
        })
      }),
      fetchCompaniesById: builder.query({
        query: (id) => ({
          url: `/companies/${id}`
        })
      }),
      fetchWorkorders: builder.query({
        query: () => ({
          url: `/workorders`
        })
      }),
      fetchWorkordersById: builder.query({
        query: (id) => ({
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
