import { MovieQueryReturnValue } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.API_KEY;

export const movieApi = createApi({
  reducerPath: "movieApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<MovieQueryReturnValue, { genre: string }>({
      query: ({ genre }) => {
        return {
          url: `movie/${genre}`,
          params: { api_key: API_KEY, language: "en-US", page: 1 },
        };
      },
    }),
  }),
});

export const { useGetMoviesQuery } = movieApi;
