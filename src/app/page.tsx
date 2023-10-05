"use client";

import { useGetMoviesQuery } from "@/redux/services/movieApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSearchParams } from "next/navigation";
import MovieList from "@/components/MovieList";
import { Movie } from "@/shared/types";
import Map from "@/components/Map";

export default function Home() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || "popular";
  const { isLoading, isFetching, data, error } = useGetMoviesQuery({ genre });

  return (
    <div>
      {/* {data?.results && <MovieList list={data?.results!} />} */}
      <Map />
    </div>
  );
}
