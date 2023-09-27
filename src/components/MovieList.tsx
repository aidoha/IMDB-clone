import { Movie } from "@/shared/types";

interface MovieListProps {
  list: Movie[];
}

export default function MovieList({ list = [] }: MovieListProps) {
  return (
    <div>
      {list?.map(({ id, original_title }) => (
        <div key={id}>{original_title}</div>
      ))}
    </div>
  );
}
