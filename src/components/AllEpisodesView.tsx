import SingleEpisodeView from "./SingleEpisodeView";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import searchFilter from "../utils/searchFilter";
import { IEpisode } from "../episodesInterface";
import { IShow } from "../utils/AllShowsInterface";

export default function EpisodesView(): JSX.Element {
  const [searchBarText, setSearchBarText] = useState<string>("");
  const [allEpisodes, setAllEpisodes] = useState<IEpisode[] | []>([]);
  const [allShows, setAllShows] = useState<IShow[] | []>([]);
  const [showID, setShowID] = useState<number>(1);

  useEffect(() => {
    const fetchAllShows = async () => {
      const response = await fetch("http://api.tvmaze.com/shows?page=1");
      const jsonBody = await response.json();
      setAllShows(jsonBody);
    };
    fetchAllShows();
  }, []);

  useEffect(() => {
    const fetchAllEpisodes = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/shows/${showID}/episodes`
      );
      const jsonBody = await response.json();
      setAllEpisodes(jsonBody);
    };
    fetchAllEpisodes();
  }, []);

  const filteredEpisodes = searchFilter(allEpisodes, searchBarText);

  return (
    <>
      <select onChange={(event) => console.log(event.target.value)}>
        {allShows.map((show) => (
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
