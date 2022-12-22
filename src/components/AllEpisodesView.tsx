import SingleEpisodeView from "./SingleEpisodeView";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import episodeSearchFilter from "../utils/searchFilter";
import { IEpisode } from "../episodesInterface";
import { IShow } from "../AllShowsInterface";
import { FaHome } from "react-icons/fa";
import createSeasonsArray from "../utils/CreateSeasonsArray";
import seasonFilter from "../utils/seasonFilter";
import "./AllEpisodesView.css";

interface AllShowsViewProps {
  allShows: IShow[];
  showID: number;
  setShowID: React.Dispatch<React.SetStateAction<number>>;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EpisodesView(props: AllShowsViewProps): JSX.Element {
  const [episodeSearchBar, setepisodeSearchBar] = useState<string>("");
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

  const searchFilteredEps = episodeSearchFilter(
    seasonFilteredEps,
    episodeSearchBar
  );

  const finalEpisodeIndex = allEpisodes.length - 1;

  const finalEpisode = allEpisodes[finalEpisodeIndex];

  const seasonsArray =
    allEpisodes.length > 0 ? createSeasonsArray(finalEpisode.season) : [];

  const parseSeasonSelection = (eventValue: string): number | "all" => {
    return eventValue === "all" ? "all" : Number(eventValue);
  };

  return (
    <>
      <div className="EpNavigate">
        <select
          className="select"
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
        <FaHome
          className="home"
          color="brown"
          onClick={() => props.setIsHome(true)}
        />
        <div className="EpSearchBar">
          <SearchBar
            episodeSearchBar={episodeSearchBar}
            setepisodeSearchBar={setepisodeSearchBar}
          />
        </div>
      </div>
      <div className="RegularText">
        <h1>Episodes</h1>
        <p>
          Showing {searchFilteredEps.length} out of {allEpisodes.length}
        </p>
      </div>
      <div className="AllEpsiodes">
        {searchFilteredEps.map((episode) => {
          return <SingleEpisodeView key={episode.id} episode={episode} />;
        })}
      </div>
    </>
  );
}
