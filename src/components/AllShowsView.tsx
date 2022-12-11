import SingleShowView from "./SingleShowView";
import { IShow } from "../AllShowsInterface";
import { sortAlphabetically } from "../utils/sortAlphabetically";
import { useState } from "react";
import SearchBar from "./SearchBar";
import showSearchFilter from "../utils/showSearchFilter";
import "./AllShowsView.css";

interface AllShowsViewProps {
  allShows: IShow[];
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  showID: number;
  setShowID: React.Dispatch<React.SetStateAction<number>>;
}

export default function AllShowsView(props: AllShowsViewProps): JSX.Element {
  const [showSearchBar, setShowSearchBar] = useState<string>("");

  const sortedShows = sortAlphabetically(props.allShows);

  const filteredShows = showSearchFilter(sortedShows, showSearchBar);
  return (
    <>
      <div className="SearchShows">
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
        <SearchBar
          episodeSearchBar={showSearchBar}
          setepisodeSearchBar={setShowSearchBar}
        />
      </div>
      <div className="AllShows">
        {filteredShows.map((show) => {
          return (
            <SingleShowView
              key={show.id}
              show={show}
              setIsHome={props.setIsHome}
              setShowID={props.setShowID}
            />
          );
        })}
      </div>
    </>
  );
}
