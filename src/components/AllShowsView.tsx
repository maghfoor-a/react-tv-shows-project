import SingleShowView from "./SingleShowView"
import { IShow } from "../AllShowsInterface";

interface AllShowsViewProps {
    allShows: IShow[]
}

export default function AllShowsView(props: AllShowsViewProps): JSX.Element {
    return (
        <>
            <h1>ALL SHOWS</h1>
        </>
    )
}