import SingleShowView from "./SingleShowView";
import { IShow } from "../AllShowsInterface";

interface AllShowsViewProps {
  allShows: IShow[];
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  showID: number;
  setShowID: React.Dispatch<React.SetStateAction<number>>;
}

export default function AllShowsView(props: AllShowsViewProps): JSX.Element {
  const allShows = props.allShows;
  return (
    <>
      <h1>ALL SHOWS</h1>
      {allShows.map((show) => {
        return (
          <SingleShowView
            key={show.id}
            show={show}
            setIsHome={props.setIsHome}
            setShowID={props.setShowID}
          />
        );
      })}
    </>
  );
}
