import { IShow } from "./AllShowsInterface";

export default function sortAlphabetically(allShows: IShow[]): IShow[] {
  return allShows.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
}
