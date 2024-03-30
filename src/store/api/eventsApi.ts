import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const events = createApi({
  reducerPath: "events",
  baseQuery: fetchBaseQuery({ baseUrl: "https://gg-backend-assignment.azurewebsites.net/" }),
  tagTypes: ["Events"],
  endpoints: (builder) => ({
    getRecommendedEvents: builder.query<any,void>({
      query: () =>
        'api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco',
      providesTags: ["Events"],
    }),
    getUpcomingEvents: builder.query({
      query: (id) =>
        `api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${id}&type=upcoming`,
      providesTags: ["Events"],
    }),
    
  }),
});

export const {
  useGetRecommendedEventsQuery,
  useGetUpcomingEventsQuery,
} = events;
