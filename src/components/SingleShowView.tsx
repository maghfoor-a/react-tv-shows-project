import AllShowsView from "./AllShowsView"
import { IShow } from "../AllShowsInterface"
import { isThrowStatement } from "typescript"
import { removePTags } from "../utils/removePTags";


interface ShowProps {
    show: IShow
}

export default function SingleShowView(props: ShowProps): JSX.Element {
    const show = props.show
    const cleanShowSummary = removePTags(show.summary)

    return (
        <div className="SingleShowView">
            <h3>
                <a href={show.url} target="_blank" rel="noopener noreferrer">{show.name}</a>
            </h3>
            {show.image !== null && (<img className="ShowImg" src={show.image.medium} alt={show.name}/>)}
            <p>Summary: {cleanShowSummary}</p>
            <div className="ShowInfo">
                <p>Rating: {show.rating.average}</p>
                <p>Genres: {show.genres}</p>
                <p>Status: {show.status}</p>
                <p>Avg Runtime: {show.averageRuntime}</p>
                
                
            </div>
        </div>
    )
}