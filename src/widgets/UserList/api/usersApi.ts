import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {UserCardType} from "../../../entities/user/model/types";
import {UserType} from "../model/types";

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => 'users',
      providesTags: ['Users'],
      transformResponse: (response: UserType[]) => 
        response.map(({id, username, name, email}: UserCardType) => ({
          id,
          username,
          name,
          email
      }))
    })
  })
})

export const { useGetAllUsersQuery } = usersApi;
