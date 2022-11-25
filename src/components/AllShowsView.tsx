import SingleShowView from "./SingleShowView";
import { IShow } from "../AllShowsInterface";
import { sortAlphabetically } from "../utils/sortAlphabetically";

interface AllShowsViewProps {
  allShows: IShow[];
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  showID: number;
  setShowID: React.Dispatch<React.SetStateAction<number>>;
}

export default function AllShowsView(props: AllShowsViewProps): JSX.Element {
  const sortedShows = sortAlphabetically(props.allShows);
  return (
    <>
      <h1>ALL SHOWS</h1>
      <select
        onChange={(event) => {
          props.setShowID(Number(event.target.value));
          props.setIsHome(false);
        }}
      >
        <option value="" disabled selected>
          Select A Show
        </option>
        {sortedShows.map((show) => (
          <option value={show.id} key={show.id}>
            {show.name}
          </option>
        ))}
      </select>
      {sortedShows.map((show) => {
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
