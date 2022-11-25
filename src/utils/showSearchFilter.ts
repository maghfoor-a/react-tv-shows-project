import { IShow } from "../AllShowsInterface";

export default function showSearchFilter(
  shows: IShow[],
  searchBarText: string
): IShow[] | [] {
  return shows.filter(
    (show) =>
      show.name
        .toLocaleLowerCase()
        .includes(searchBarText.toLocaleLowerCase()) ||
      (show.summary !== null &&
        show.summary
          .toLocaleLowerCase()
          .includes(searchBarText.toLocaleLowerCase())) ||
      show.genres.includes(searchBarText.toLocaleLowerCase())
  );
}
