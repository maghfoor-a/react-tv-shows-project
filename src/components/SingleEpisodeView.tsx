import episodeCode from "../utils/episodeCode";
import { IEpisode } from "../episodesInterface";

export default function singleEpisodeView(episode: IEpisode): JSX.Element {
    const episodeCodeName = episodeCode(episode);
    return (
        <>
            <h3>{episodeCodeName}: <a href={episode.url}>{episode.name}</a></h3>
            <h5>Rating: {episode.rating.average}</h5>
            <img className="episodeImg" src={episode.image.medium} alt={episode.name}/>
            <p>{episode.summary}</p>
        </>
    )
}