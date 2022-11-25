import { IEpisode } from "../episodesInterface";

export default function seasonFilter(
  allEpisodes: IEpisode[],
  seasonNum: number | "all"
): IEpisode[] {
  if (seasonNum === "all") {
    return allEpisodes;
  } else {
    return allEpisodes.filter((episode) => episode.season === seasonNum);
  }
}
