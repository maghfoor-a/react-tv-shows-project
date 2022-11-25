import SingleEpisodeView from "./SingleEpisodeView";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import searchFilter from "../utils/searchFilter";
import { IEpisode } from "../episodesInterface";
import { IShow } from "../AllShowsInterface";
import { sortAlphabetically } from "../utils/sortAlphabetically";
import { FaHome } from "react-icons/fa";
import createSeasonsArray from "../utils/CreateSeasonsArray";
import seasonFilter from "../utils/seasonFilter";

interface AllShowsViewProps {
  allShows: IShow[];
  showID: number;
  setShowID: React.Dispatch<React.SetStateAction<number>>;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EpisodesView(props: AllShowsViewProps): JSX.Element {
  const [searchBarText, setSearchBarText] = useState<string>("");
  const [allEpisodes, setAllEpisodes] = useState<IEpisode[] | []>([]);
  const [seasonSelection, setSeasonSelection] = useState<number | "all">("all");

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

  const seasonFilteredEps = seasonFilter(allEpisodes, seasonSelection);

  const searchFilteredEps = searchFilter(seasonFilteredEps, searchBarText);

  const sortedShows = sortAlphabetically(props.allShows);

  const finalEpisodeIndex = allEpisodes.length - 1;

  const finalEpisode = allEpisodes[finalEpisodeIndex];

  const seasonsArray =
    allEpisodes.length > 0 ? createSeasonsArray(finalEpisode.season) : [];

  const parseSeasonSelection = (eventValue: string): number | "all" => {
    return eventValue === "all" ? "all" : Number(eventValue);
  };

  return (
    <>
      <select
        onChange={(event) =>
          setSeasonSelection(parseSeasonSelection(event.target.value))
        }
      >
        <option value="" disabled selected>
          Select a season
        </option>
        <option value="all">All Episodes</option>
        {seasonsArray.length > 1 &&
          seasonsArray.map((element) => (
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
        Showing {searchFilteredEps.length} out of {allEpisodes.length}
      </p>
      {searchFilteredEps.map((episode) => {
        return <SingleEpisodeView key={episode.id} episode={episode} />;
      })}
    </>
  );
}
