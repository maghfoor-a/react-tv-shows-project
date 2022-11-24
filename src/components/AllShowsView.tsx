import SingleShowView from "./SingleShowView";
import { IShow } from "../AllShowsInterface";
import {sortAlphabetically} from "../utils/sortAlphabetically"

interface AllShowsViewProps {
  allShows: IShow[];
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  showID: number;
  setShowID: React.Dispatch<React.SetStateAction<number>>;
}

export default function AllShowsView(props: AllShowsViewProps): JSX.Element {
  const sortedShows1 = sortAlphabetically(props.allShows);
  return (
    <>
      <h1>ALL SHOWS</h1>
      {sortedShows1.map((show) => {
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
