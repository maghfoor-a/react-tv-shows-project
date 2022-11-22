import { IEpisode } from "../episodesInterface";

export default function searchFilter(
  episodes: IEpisode[] | undefined,
  searchBarText: string
): IEpisode[] | [] {
  if (typeof episodes !== "undefined") {
    return episodes.filter(
      (episode) =>
        episode.summary !== null &&
        (episode.name
          .toLocaleLowerCase()
          .includes(searchBarText.toLocaleLowerCase()) ||
          episode.summary
            .toLocaleLowerCase()
            .includes(searchBarText.toLocaleLowerCase()))
    );
  }
  return [];
}
