import { IEpisode } from "../episodesInterface";

export function removePTags(episode: IEpisode): string {
  const input = episode.summary;
  let output = input.replace(/<p>/g, "");
  output = output.replace(/<\/p>/g, "");
  return output;
}
