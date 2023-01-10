import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const storyApi = createApi({
  reducerPath: "storyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hacker-news.firebaseio.com/v0/",
  }),
  tagTypes: ["Story"],
  endpoints: (build) => ({
    fetchAllStories: build.query<number[], number>({
      query: () => ({
        url: "newstories.json",
      }),
      providesTags: () => ["Story"],
    }),
  }),
});

export { storyApi };
