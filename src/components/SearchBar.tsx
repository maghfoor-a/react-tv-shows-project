interface SearchBarProps {
  episodeSearchBar: string;
  setepisodeSearchBar: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar(props: SearchBarProps): JSX.Element {
  return (
    <input
      value={props.episodeSearchBar}
      onChange={(event) => props.setepisodeSearchBar(event.target.value)}
    ></input>
  );
}
