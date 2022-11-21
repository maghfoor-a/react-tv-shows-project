import episodeCode from "../utils/episodeCode";
import { IEpisode } from "../episodesInterface";

interface EpisodeProps {
  episode: IEpisode;
}

export default function SingleEpisodeView(props: EpisodeProps): JSX.Element {
  const episode = props.episode;
  const episodeCodeName = episodeCode(episode);

  return (
    <div className="singleEpisode">
      <h3>
        {episodeCodeName}:{" "}
        <a href={episode.url} target="_blank" rel="noopener noreferrer">
          {episode.name}
        </a>
      </h3>
      <h5>Rating: {episode.rating.average}</h5>
      <img
        className="episodeImg"
        src={episode.image.medium}
        alt={episode.name}
      />
      <p>{episode.summary}</p>
    </div>
  );
}