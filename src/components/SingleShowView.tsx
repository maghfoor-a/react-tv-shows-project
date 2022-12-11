import { IShow } from "../AllShowsInterface";
import { removePTags } from "../utils/removePTags";
import { seperateGenres } from "../utils/seperateGenres";

interface ShowProps {
  show: IShow;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  setShowID: React.Dispatch<React.SetStateAction<number>>;
}

export default function SingleShowView(props: ShowProps): JSX.Element {
  const show = props.show;
  const cleanShowSummary = removePTags(show.summary);
  const cleanGenres = seperateGenres(show.genres);

  const handleClick = () => {
    props.setIsHome(false);
    props.setShowID(show.id);
  };

  return (
    <div className="SingleShowView" onClick={handleClick}>
      <h3 className="ShowTitle">
        <a href={show.url} target="_blank" rel="noopener noreferrer">
          {show.name}
        </a>
      </h3>
      <div className="ShowImg">
        {show.image !== null && (
          <img
            src={show.image.medium}
            alt={show.name}
            width="240px"
            height="340px"
          />
        )}
      </div>
      <div className="ShowSummary">
        <p>Summary: {cleanShowSummary}</p>
      </div>
      <div className="ShowInfo">
        <p>
          <b>Rating:</b> {show.rating.average} <b>Genres:</b> {cleanGenres}{" "}
          <b>Status:</b> {show.status} <b>Avg Runtime:</b> {show.averageRuntime}
        </p>
      </div>
    </div>
  );
}
