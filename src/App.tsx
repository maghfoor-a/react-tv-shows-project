import { greet } from "./utils/greet";
import episodes from './episodes.json'

function App(): JSX.Element {
  console.log(`Imported ${episodes.length} episode(s)`);
  console.log(`First episode's name is ${episodes[0].name}`);
  return (
  <h1>{greet("World")}</h1>
  )
}

export default App;
