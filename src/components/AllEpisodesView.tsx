import SingleEpisodeView from "./SingleEpisodeView";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import searchFilter from "../utils/searchFilter";
import { IEpisode } from "../episodesInterface";
import { IShow } from "../AllShowsInterface";
import { sortAlphabetically } from "../utils/sortAlphabetically";
import { FaHome } from "react-icons/fa";
import createSeasonsArray from "../utils/CreateSeasonsArray";

interface AllShowsViewProps {
  allShows: IShow[];
  showID: number;
  setShowID: React.Dispatch<React.SetStateAction<number>>;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EpisodesView(props: AllShowsViewProps): JSX.Element {
  const [searchBarText, setSearchBarText] = useState<string>("");
  const [allEpisodes, setAllEpisodes] = useState<IEpisode[] | []>([]);
  const [seasonSelection, setSeasonSelection] = useState<number>();

  useEffect(() => {
    const fetchAllEpisodes = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/shows/${props.showID}/episodes`
      );
      const jsonBody = await response.json();
      setAllEpisodes(jsonBody);
    };
    fetchAllEpisodes();
  }, [props.showID]);

  
  const filteredEpisodes = searchFilter(allEpisodes, searchBarText);

  const sortedShows = sortAlphabetically(props.allShows);

  const finalEpisodeIndex = allEpisodes.length - 1;

  const finalEpisode = allEpisodes[finalEpisodeIndex];

  const finalSeason = finalEpisode.season;

  const seasonsArray = createSeasonsArray(finalSeason);

  return (
    <>
      <select>
        <option value="" disabled selected>
          Select a season
        </option>
        {seasonsArray.map((element) => (
          <option value={element} key={element}>
            Season {element}
          </option>
        ))}
      </select>

      <select onChange={(event) => props.setShowID(Number(event.target.value))}>
        <option value="" disabled selected>
          Select your option
        </option>
        {sortedShows.map((show) => (
          <option value={show.id} key={show.id}>
            {show.name}
          </option>
        ))}
      </select>
      <h1>episodes (edit this)</h1>
      <FaHome onClick={() => props.setIsHome(true)} />
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
