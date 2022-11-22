import simpsonsEpisodes from "../simpsonsEpisodes.json";
import SingleEpisodeView from "./SingleEpisodeView";
import SearchBar from "./SearchBar";
import { useState } from "react";
import searchFilter from "../utils/searchFilter";

export default function EpisodesView(): JSX.Element {
  const [searchBarText, setSearchBarText] = useState<string>("");

  const filteredEpisodes = searchFilter(simpsonsEpisodes, searchBarText);

  return (
    <>
      <h1>EPISODES</h1>
      <SearchBar
        searchBarText={searchBarText}
        setSearchBarText={setSearchBarText}
      />
      <p>
        Showing {filteredEpisodes.length} out of {simpsonsEpisodes.length}
      </p>
      {filteredEpisodes.map((episode) => {
        return <SingleEpisodeView key={episode.id} episode={episode} />;
      })}
    </>
  );
}
