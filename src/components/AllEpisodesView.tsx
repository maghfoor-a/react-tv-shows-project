import episodes from "../episodes.json";
import SingleEpisodeView from "./SingleEpisodeView";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function EpisodesView(): JSX.Element {
  const [searchBarText, setSearchBarText] = useState<string>("");
  return (
    <>
      <h1>EPISODES</h1>
      <SearchBar
        searchBarText={searchBarText}
        setSearchBarText={setSearchBarText}
      />
      {episodes
        .filter(
          (episode) =>
            episode.name
              .toLocaleLowerCase()
              .includes(searchBarText.toLocaleLowerCase()) ||
            episode.summary
              .toLocaleLowerCase()
              .includes(searchBarText.toLocaleLowerCase())
        )
        .map((episode) => {
          return <SingleEpisodeView key={episode.id} episode={episode} />;
        })}
    </>
  );
}
