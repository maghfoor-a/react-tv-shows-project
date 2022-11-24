import SingleEpisodeView from "./SingleEpisodeView";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import searchFilter from "../utils/searchFilter";
import { IEpisode } from "../episodesInterface";
import { IShow } from "../AllShowsInterface";
import sortAlphabetically from "../utils/sortAlphabetically";

interface AllShowsViewProps {
  allShows: IShow[]
}


export default function EpisodesView(props: AllShowsViewProps): JSX.Element {
  const [searchBarText, setSearchBarText] = useState<string>("");
  const [allEpisodes, setAllEpisodes] = useState<IEpisode[] | []>([]);
  const [showID, setShowID] = useState<number>(1);


  useEffect(() => {
    const fetchAllEpisodes = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/shows/${showID}/episodes`
      );
      const jsonBody = await response.json();
      setAllEpisodes(jsonBody);
    };
    fetchAllEpisodes();
  }, [showID]);

  const filteredEpisodes = searchFilter(allEpisodes, searchBarText);

  const sortedShows = sortAlphabetically(props.allShows);
  return (
    <>
      <select onChange={(event) => setShowID(Number(event.target.value))}>
        {sortedShows.map((show) => (
          <option value={show.id} key={show.id}>
            {show.name}
          </option>
        ))}
      </select>
      <h1>EPISODES</h1>
      <SearchBar
        searchBarText={searchBarText}
        setSearchBarText={setSearchBarText}
      />
      <p>
        Showing {filteredEpisodes.length} out of {allEpisodes.length}
      </p>
      {filteredEpisodes.map((episode) => {
        return <SingleEpisodeView key={episode.id} episode={episode} />;
      })}
    </>
  );
}
