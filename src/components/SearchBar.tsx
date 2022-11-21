
interface SearchBarProps {
    searchBarText: string,
    setSearchBarText: React.Dispatch<React.SetStateAction<string>>
}


export default function SearchBar(props: SearchBarProps): JSX.Element {

    
    return (
        <input value={props.searchBarText} onChange={(event) => props.setSearchBarText(event.target.value)}></input>
    )
}