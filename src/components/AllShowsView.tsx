import SingleShowView from "./SingleShowView"
import { IShow } from "../AllShowsInterface";

interface AllShowsViewProps {
    allShows: IShow[]
}

export default function AllShowsView(props: AllShowsViewProps): JSX.Element {
    const allShows = props.allShows
    return (
        <>
            <h1>ALL SHOWS</h1>
            {allShows.map(show => {
                return <SingleShowView key={show.id} show={show}/>
            })}
        </>
    )
}