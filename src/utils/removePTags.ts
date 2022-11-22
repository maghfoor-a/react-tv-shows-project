import { IEpisode } from "../episodesInterface";

export function removePTags(episode: IEpisode): string {
  const input = episode.summary;
  if (input !== null && input.length > 0) {
    let output = input.replace(/<p>/g, "");
    output = output.replace(/<\/p>/g, "");
    return output;
  } else {
    return "SUMMARY NOT FOUND";
  }
}
