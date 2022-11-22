import { IEpisode } from "../episodesInterface";

export function removePTags(episode: IEpisode): string | null {
  const input = episode.summary;
  if (input !== null) {
    let output = input.replace(/<p>/g, "");
    output = output.replace(/<\/p>/g, "");
    return output;
  } else {
    return null;
  }
}
