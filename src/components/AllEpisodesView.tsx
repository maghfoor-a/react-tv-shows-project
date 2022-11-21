import episodes from '../episodes.json';
import SingleEpisodeView from './SingleEpisodeView';

export default function EpisodesView(): JSX.Element {

    return (
        <>
            <h1>EPISODES</h1>
            {episodes.map((episode) => {
            return <SingleEpisodeView key={episode.id} episode={episode}/>
        })}
        </>
    )
}