import episodes from "../episodes.json";
import SingleEpisodeView from "./SingleEpisodeView";
import SearchBar from "./SearchBar";
import { useState } from "react";
import searchFilter from "../utils/searchFilter";

export default function EpisodesView(): JSX.Element {
  const [searchBarText, setSearchBarText] = useState<string>("");

  const filteredEpisodes = searchFilter(episodes, searchBarText);

  return (
    <>
      <h1>EPISODES</h1>
      <SearchBar
        searchBarText={searchBarText}
        setSearchBarText={setSearchBarText}
      />
      <p>
        Showing {filteredEpisodes.length} out of {episodes.length}
      </p>
      {filteredEpisodes.map((episode) => {
        return <SingleEpisodeView key={episode.id} episode={episode} />;
      })}
    </>
  );
}
